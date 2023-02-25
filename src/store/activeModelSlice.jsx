import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActiveModel: false,
  isUpDate: false
}

export const activeModel = createSlice({
  name: 'activeModel',
  initialState,
  reducers: {
    openModel: (state, action) => {
      state.isActiveModel = true
    }, 
    closeModel: (state, action) => {
      state.isActiveModel = false
    }, 
    openUpDateModel: (state, action) => {
      state.isUpDate = true
    }, 
    closeUpDateModel: (state, action) => {
      state.isUpDate = false
    } 
  }
})

export const { openModel , closeModel , openUpDateModel , closeUpDateModel} = activeModel.actions;

export default activeModel.reducer;