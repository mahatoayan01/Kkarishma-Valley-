import React, { createContext, useContext, useState, useEffect } from 'react';
import { RESTAURANT } from '../data/restaurant';

const AuthContext = createContext();

const AUTH_STORAGE_KEY = 'karishma_valley_owner_auth';

/**
 * NOTE ON SECURITY:
 * This authentication provider is strictly for front-end demonstration purposes.
 * It simulates owner access using local storage and client-side credential verification.
 * In a real production environment, authentication would be backed by secure HTTP-only cookies,
 * JWT tokens, and an authenticated backend API.
 */
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY);
      return stored === 'true';
    } catch (e) {
      console.warn("Unable to access localStorage for auth:", e);
      return false;
    }
  });

  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY);
      return stored === 'true'
        ? { email: RESTAURANT.demoCredentials.email, role: 'Owner' }
        : null;
    } catch {
      return null;
    }
  });

  const login = (email, password) => {
    const validEmail = RESTAURANT.demoCredentials.email.trim().toLowerCase();
    const validPassword = RESTAURANT.demoCredentials.password.trim();

    if (
      email.trim().toLowerCase() === validEmail &&
      password.trim() === validPassword
    ) {
      try {
        localStorage.setItem(AUTH_STORAGE_KEY, 'true');
      } catch (e) {
        console.warn("Unable to save auth state to localStorage:", e);
      }
      setIsAuthenticated(true);
      setUser({ email: validEmail, role: 'Owner' });
      return { success: true };
    } else {
      return {
        success: false,
        error: 'Invalid credentials. Please use demo credentials: owner@demo.com / demo1234',
      };
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch (e) {
      console.warn("Unable to remove auth state from localStorage:", e);
    }
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

