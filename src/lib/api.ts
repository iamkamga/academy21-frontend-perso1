const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('ato_token');
}

function authHeaders(): HeadersInit {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: { ...authHeaders(), ...(options.headers || {}) },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: 'Erreur réseau' }));
    throw new Error(err.message || `Erreur ${res.status}`);
  }
  return res.json();
}

// AUTH
export const api = {
  auth: {
    register: (email: string, password: string, name?: string) =>
     request<{ token: string; user: { id: string; email: string; role: string } }>(
       '/api/auth/register',
       { method: 'POST', body: JSON.stringify({ email, password, name }) }
    ),
    login: (email: string, password: string) =>
      request<{ token: string; user: { id: string; email: string; role: string } }>(
        '/api/auth/login',
        { method: 'POST', body: JSON.stringify({ email, password }) }
      ),
    me: () => request<{ id: string; email: string; role: string }>('/api/auth/me'),
  },

  formations: {
    list: () => request<Formation[]>('/api/formations'),
    get: (id: string) => request<Formation>(`/api/formations/${id}`),
    create: (data: Partial<Formation>) =>
      request<Formation>('/api/formations', { method: 'POST', body: JSON.stringify(data) }),
    update: (id: string, data: Partial<Formation>) =>
      request<Formation>(`/api/formations/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id: string) =>
      request<void>(`/api/formations/${id}`, { method: 'DELETE' }),
  },

  events: {
    list: () => request<Event[]>('/api/events'),
    get: (id: string) => request<Event>(`/api/events/${id}`),
    create: (data: Partial<Event>) =>
      request<Event>('/api/events', { method: 'POST', body: JSON.stringify(data) }),
  },

  payments: {
    stripeCheckout: (formationId: string, amount: number, title: string) =>
      request<{ url: string }>('/api/payments/checkout', {
        method: 'POST',
        body: JSON.stringify({ formationId, amount, title }),
      }),
    paypalCreate: (formationId: string, amount: number, title: string) =>
      request<{ url: string; orderId: string }>('/api/payments/paypal/create', {
        method: 'POST',
        body: JSON.stringify({ formationId, amount, title }),
      }),
    myPayments: () => request<Payment[]>('/api/payments/my'),
  },

  member: {
    dashboard: () =>
      request<{
        user: { id: string; email: string; role: string; memberSince: string };
        payments: Payment[];
        totalSpent: number;
      }>('/api/member/dashboard'),
    payments: () => request<Payment[]>('/api/member/payments'),
  },
};

// TYPES
export interface Formation {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  price: number;
}

export interface Payment {
  id: string;
  formationId?: string;
  amount: number;
  status: string;
  createdAt: string;
  formation?: { title: string };
}
