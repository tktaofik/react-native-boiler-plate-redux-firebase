import { types } from 'mobx-state-tree'

export default types
  .model('user', {
    firstName: types.optional(types.string, ''),
    lastName: types.optional(types.string, ''),
    phone: types.optional(types.string, ''),
    id: types.optional(types.string, ''),
    email: types.optional(types.string, ''),
  })
  .actions(self => ({
    changeName(newName) {
      self.name = newName
    },
  }))
  .views(self => ({
    get displayName() {
      return `${self.firstName} ${self.lastName}`;
    },
  }));
