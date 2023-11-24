import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: ''
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    registerUser: (state, action) => {
      // Логика регистрации пользователя...
      console.log('Регистрация пользователя:', state.name);
    }
  }
});

export const { setName, registerUser } = userSlice.actions;
export default userSlice.reducer;