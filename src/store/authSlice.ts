import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
};

const loadAuthState = (): AuthState => {
  try {
    const authStateJSON = localStorage.getItem("authState");
    if (authStateJSON) {
      return JSON.parse(authStateJSON);
    }
  } catch (error) {
    console.error("Error loading auth state from localStorage:", error);
  }
  return initialState;
};

const saveAuthState = (state: AuthState) => {
  try {
    const authStateJSON = JSON.stringify(state);
    localStorage.setItem("authState", authStateJSON);
  } catch (error) {
    console.error("Error saving auth state to localStorage:", error);
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: loadAuthState(),
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isAuthenticated = true;
      state.token = action.payload;
      saveAuthState(state);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      saveAuthState(state);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
