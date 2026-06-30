
// import { createSlice } from '@reduxjs/toolkit';

// const adminSlice = createSlice({
//   name: 'admin',
//   initialState: {
//     email: '',
//     password: '',
//     isAuthenticated: false,
//   },
//   reducers: {
//     setAdminEmail: (state, action) => {
//       state.email = action.payload;
//       state.isAuthenticated = true; // Make sure this line is present
//     },
//     setAdminPassword: (state, action) => {
//       state.password = action.payload;
//     },
//     clearAdmin: (state) => {
//       state.email = '';
//       state.password = '';
//       state.isAuthenticated = false;
//     },
//   },
// });

// export const { setAdminEmail, setAdminPassword, clearAdmin } = adminSlice.actions;
// export default adminSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'admin',
  // ✅ CHANGE 1: Read from localStorage on startup
  initialState: {
    email: localStorage.getItem('adminEmail') || '',
    isAuthenticated: localStorage.getItem('isAdminAuth') === 'true' || false,
  },
  reducers: {
    setAdminEmail: (state, action) => {
      state.email = action.payload;
      // ✅ CHANGE 2: Save to localStorage
      localStorage.setItem('adminEmail', action.payload);
      state.isAuthenticated = true;
      localStorage.setItem('isAdminAuth', 'true');
    },
    clearAdmin: (state) => {
      state.email = '';
      state.isAuthenticated = false;
      // ✅ CHANGE 3: Clear localStorage
      localStorage.removeItem('adminEmail');
      localStorage.removeItem('isAdminAuth');
    },
  },
});

export const { setAdminEmail, clearAdmin } = adminSlice.actions;
export default adminSlice.reducer;