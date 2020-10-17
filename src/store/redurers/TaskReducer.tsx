import { createSlice } from '@reduxjs/toolkit';

const initialState = {
      id: '',
      title: '',
      description: '',
      assign: ''
}

const TaskReducer = createSlice({
      name: 'task',
      initialState: initialState,
      reducers: { 
            setTask: (state, action) => {
 
            }
      }
});

export const {
      setTask,
} = TaskReducer.actions

export default TaskReducer.reducer