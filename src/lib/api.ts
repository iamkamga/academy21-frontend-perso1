/**
 * Client HTTP pour les API routes Next.js.
 *
 * L'authentification passe par un cookie httpOnly `a21_session` posé par le
 * serveur au login/register. Comme tout est en même origine, le cookie est
 * envoyé automatiquement : aucun token à gérer côté client.
 */

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(path, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    // Explicite : envoie les cookies même origine
    credentials: 'same-origin',
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: 'Erreur réseau' }));
    throw new Error(err.message || `Erreur ${res.status}`);
  }
  // 204 No Content
  if (res.status === 204) return undefined as T;
  return res.json();
}

interface AuthUser {
  id: string;
  email: string;
  role: 'member' | 'admin';
  name?: string | null;
}

export const api = {
  auth: {
    register: (email: string, password: string, name?: string) =>
      request<{ user: AuthUser }>('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, password, name }),
      }),
    login: (email: string, password: string) =>
      request<{ user: AuthUser }>('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }),
    logout: () => request<{ ok: boolean }>('/api/auth/logout', { method: 'POST' }),
    me: () => request<AuthUser>('/api/auth/me'),
  },

  formations: {
    list: () => request<Formation[]>('/api/formations'),
    get: (id: string) => request<Formation>(`/api/formations/${id}`),
    create: (data: Partial<Formation>) =>
      request<Formation>('/api/formations', { method: 'POST', body: JSON.stringify(data) }),
    update: (id: string, data: Partial<Formation>) =>
      request<Formation>(`/api/formations/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id: string) => request<void>(`/api/formations/${id}`, { method: 'DELETE' }),
  },

  events: {
    list: () => request<Event[]>('/api/events'),
    get: (id: string) => request<Event>(`/api/events/${id}`),
    create: (data: Partial<Event>) =>
      request<Event>('/api/events', { method: 'POST', body: JSON.stringify(data) }),
  },

  payments: {
    stripeCheckout: (formationId: string) =>
      request<{ url: string; paymentId: string }>('/api/payments/checkout', {
        method: 'POST',
        body: JSON.stringify({ formationId }),
      }),
    paypalCreate: (formationId: string) =>
      request<{ url: string; orderId: string; paymentId: string }>('/api/payments/paypal/create', {
        method: 'POST',
        body: JSON.stringify({ formationId }),
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
  method?: string;
  createdAt: string;
  formation?: { title: string };
}
