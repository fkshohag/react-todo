import { configureStore } from "@reduxjs/toolkit"
import reducer from './redurers/index';
const store = configureStore({
      reducer
})
export default store