import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  phone: '',
  password: '',
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    saveRegistrationInfo: (state, action) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.password = action.payload.password;
    },
  },
});

export const { saveRegistrationInfo } = registrationSlice.actions;

export default registrationSlice.reducer;