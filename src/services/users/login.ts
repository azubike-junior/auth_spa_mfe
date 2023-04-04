import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import { ILogin } from '../../types';
import { http } from '../axios/http';

interface initState {
  error: any,
  loading: boolean,
  data: any
}

const initialState: initState = {
  error: "",
  loading: false,
  data: ""
}

export const loginUser = createAsyncThunk("/users/login", async ({navigate, props,  ...rest}: ILogin, {rejectWithValue}) => {
  
  try {
    const rs = await axios.post(`https://api.imalipay.com/users/login`, rest)
    if (rs.data.statusCode === '0000') {
     
      localStorage.setItem('access_token', rs.data.data[0].access_token)
      localStorage.setItem('refresh_token', rs.data.data[0].refresh_token)
      navigate("/dashboard")
      return rs.data
    }

    if (rs.data.statusCode === "9000") {
      return rejectWithValue(rs.data.statusCode)
    }

  } catch (e) {
    console.log(">>>>>>e", e)
    return rejectWithValue(e)
  }
})

const loginSlice = createSlice({
  name: "/users/login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.data = action.payload
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  }
})

export default loginSlice.reducer