import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-toastify";

// Login
export const Userlogin = createAsyncThunk(
  "auth/login",
  async ({ email, password, role }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { email, password, role });

      // Store token
      if (data.success) {
        localStorage.setItem("token", data.token); // Fixed 'taken' typo
        toast.success(data.message);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Register
export const Userregister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      email,
      password,
      phone,
      role,
      organization,
      hospital,
      website,
      address,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
        name,
        email,
        password,
        role,
        organization,
        hospital,
        website,
        address,
        phone,
      });

      if (data.success) {
        console.log(data.message);
        toast.success(data.message);

        window.location.replace('/login');
        // Optional delay for smoother transition
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
