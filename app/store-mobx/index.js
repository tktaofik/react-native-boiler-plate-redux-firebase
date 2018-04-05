import { types } from 'mobx-state-tree'
import Auth from './auth/auth'

export default types
  .model('Store', {
    user: types.optional(Auth, {}),
  })
