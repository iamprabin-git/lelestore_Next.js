import { login } from "@/api/auth";
import { createAsyncThunk } from"@reduxjs/toolkit";

export const loginUser = createAsyncThunk("auth/login", async (data, { rejectWithValue })=>{
    try {
        const response = await login(data);

        return response.data;
    } catch (error) {
       return rejectWithValue(error.response.data);
    }
});

