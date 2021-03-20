import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    user: 'guest'
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  }
})

const exampleThunkFunction = (dispatch, getState) => {
  const stateBefore = getState()
  console.log(`Counter before: ${stateBefore.counter}`)
  //dispatch(increment())
  const stateAfter = getState()
  console.log(`Counter after: ${stateAfter.counter}`)
}


export const { setUser } = homeSlice.actions

export default homeSlice.reducer
