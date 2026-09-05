'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { api } from '@/lib/api';

interface User {
  id: string;
  email: string;
  role: string;
  name?: string | null;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<User>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => Promise<void>;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Au montage, on demande au serveur qui on est (via le cookie de session).
  // Plus de token à lire dans localStorage.
  useEffect(() => {
    api.auth
      .me()
      .then((u) => setUser(u))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const login = async (email: string, password: string): Promise<User> => {
    const { user: u } = await api.auth.login(email, password);
    setUser(u);
    return u;
  };

  const register = async (email: string, password: string, name?: string): Promise<void> => {
    // register connecte automatiquement l'utilisateur (cookie posé par le serveur)
    // mais on reste sur l'ancien comportement front (redirection vers /login)
    // pour ne pas casser les pages existantes qui redirigent après register.
    await api.auth.register(email, password, name);
  };

  const logout = async (): Promise<void> => {
    try {
      await api.auth.logout();
    } catch {
      /* on ignore les erreurs, on efface l'état local dans tous les cas */
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, register, logout, isAdmin: user?.role === 'admin' }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
