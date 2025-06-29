// store/useAuthStore.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

//  User type
interface User {
  id: string;
  name: string;
  email: string;
  designation: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: {
        id: "1",
        name: "Ayush Ranjan Sinha",
        email: "ayush@rahulsolutions.com",
        designation: "Full Stack Developer",
      }, // default user
      isAuthenticated: true,
      login: (userData) =>
        set(() => ({
          user: userData,
          isAuthenticated: true,
        })),
      logout: () =>
        set(() => ({
          user: null,
          isAuthenticated: false,
        })),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
