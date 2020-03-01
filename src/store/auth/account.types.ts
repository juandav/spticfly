import { login } from './account.slice'

export type Login = ReturnType<typeof login>

export type Account = Login | null
