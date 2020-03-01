import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './account.state'
import { ACCOUNT_SLICE } from '../slice.constants'

function loginReducer(state) {  }

const accountSlice = createSlice({
  name: ACCOUNT_SLICE,
  initialState,
  reducers: { 
    login: loginReducer
  }
})

const { login } = accountSlice.actions

export {
  login, 
  accountSlice 
}
export default accountSlice.reducer
