import { createSlice } from '@reduxjs/toolkit';

const initialState = [{}]

interface Task {
      id: number,
      title: string,
      description: string,
      assign: string,
      status: string
}

const TaskReducer = createSlice({
      name: 'task',
      initialState: initialState,
      reducers: { 
            setTask: (state, action) => {
                  const task: Task = {
                        id: action.payload.id,
                        title: action.payload.title,
                        description: action.payload.description,
                        assign: action.payload.assign,
                        status: action.payload.status
                  }
                  state.unshift(task)
            }
      }
});

export const {
      setTask,
} = TaskReducer.actions

export default TaskReducer.reducer