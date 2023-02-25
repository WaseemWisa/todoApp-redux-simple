import { configureStore } from '@reduxjs/toolkit'
import  activeModel  from './activeModelSlice'
import tasksSlice from './tasksSlice'

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    activeModel: activeModel
  },
})

