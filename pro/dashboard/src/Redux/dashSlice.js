import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//  fetching weather data
export const fetchWeather = createAsyncThunk('dashboard/fetchWeather', async () => {
    const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=india&appid=8e21e00b9bc53215038bd9c1741b2a65');
    // console.log(res.data);
    return res.data;
});

// fetching user data
export const fetchUsers = createAsyncThunk('dashboard/fetchUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
});


const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        loading: false,
        weather: [],
        users: [],
        profile: [],
        error: ""
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false;
            state.weather = action.payload;
            state.error = "";
        })
        builder.addCase(fetchWeather.rejected, (state, action) => {
            state.loading = false;
            state.weather = [];
            state.error = action.error.message;
        })

        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = "";
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        })
    }
});

export const { } = dashboardSlice.actions;
export default dashboardSlice.reducer;
