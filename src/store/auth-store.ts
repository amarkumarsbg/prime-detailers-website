"use client";

import { create } from "zustand";
import type { AuthUser } from "@/types";
import { getToken, clearToken } from "@/lib/api-client";

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isLoading: boolean;
  setSession: (user: AuthUser, token: string) => void;
  clearSession: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: getToken(),
  isLoading: false,
  setSession: (user, token) => set({ user, token }),
  clearSession: () => {
    clearToken();
    set({ user: null, token: null });
  },
  setLoading: (isLoading) => set({ isLoading }),
}));
