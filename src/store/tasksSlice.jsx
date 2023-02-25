import { createSlice } from '@reduxjs/toolkit';
import tasks from '../data';
const initialState = {
  tasksItem: tasks,
  currentIndex: null,
  checkedIndex: null,
  filterState: 'all',
}

export const counterSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasksItem.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasksItem = state.tasksItem.filter(item => item.id != action.payload)
    },
    upDateIndex: (state, action) => {
      state.currentIndex = action.payload
    },
    upDateTasks: (state, action) => {
      state.tasksItem.forEach((item) => {
        if (item.id == state.currentIndex) {
          item.title = action.payload.title;
          item.state = action.payload.state;
          item.time = action.payload.time;
        }
      })
    },
    filterTasks: (state, action) => {
      state.filterState = action.payload;
    },
    checkTask: (state , action) => {
      state.checkedIndex = action.payload;
      state.tasksItem.filter((item , i) => {
        if (item.id == state.checkedIndex) {
          return item.state == 'complete' ? item.state = 'incomplete' : item.state = 'complete'
        }
      })
    }
  }
  },
)

export const { addTask , removeTask , upDateTasks , closeModel , upDateIndex , filterTasks , checkTask} = counterSlice.actions

export default counterSlice.reducer