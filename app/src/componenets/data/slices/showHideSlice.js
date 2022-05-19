import {createSlice} from '@reduxjs/toolkit';

const axios = require('axios');
let newData = axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{console.log(response.data); return response.data});
console.log(newData.data)



export const showHideSlice = createSlice({
    name: 'showHide',
    initialState: {
      value: true,
    },
    reducers: {
      toggle: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value = !state.value
        console.log(state.value)
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { toggle } = showHideSlice.actions
  
  export default showHideSlice.reducer