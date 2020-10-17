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
                  state.id = action.payload.id
                  state.title = action.payload.title
                  state.description = action.payload.description
                  state.assign = action.payload.assign
            }
      }
});

export const {
      setTask,
} = TaskReducer.actions

export default TaskReducer.reducer