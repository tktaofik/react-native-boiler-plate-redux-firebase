// import { getSnapshot, onSnapshot, onPatch } from 'mobx-state-tree'
import { reaction } from 'mobx'
import auth from './auth'

it('can create a instance of a auth store', () => {
  let changed = 0;
  const user = auth.create({
    firstName: 'tk',
    lastName: 'yu',
    phone: '+16137002818',
    id: 'tkyu',
    email: 'test@test.com',
  });

  reaction(() => user.displayName, () => changed++);
  expect(changed).toBe(0);
  expect(user.firstName).toBe('tk');
  expect(user.lastName).toBe('yu');
  expect(user.phone).toBe('+16137002818');
  expect(user.id).toBe('tkyu');
  expect(user.email).toBe('test@test.com');
  expect(user.displayName).toBe('tk yu');
});


// it('can create a wishlist', () => {
//   const list = ItemList.create({
//     items: [
//       {
//         name: 'Chronicles of Narnia Box Set - C.S. Lewis',
//         price: 28.73,
//       },
//     ],
//   });
//
//   expect(list.items.length).toBe(1);
//   expect(list.items[0].price).toBe(28.73)
// });
//
// it('can add new items - 2', () => {
//   const list = ItemList.create();
//   const patches = [];
//   onPatch(list, (patch) => {
//     patches.push(patch)
//   });
//
//   list.add({
//     name: 'Chesterton',
//     price: 10,
//   });
//
//   list.items[0].changeName('Book of G.K. Chesterton');
//
//   expect(patches).toMatchSnapshot()
// });
//
// it('can add new items', () => {
//   const list = ItemList.create();
//   const states = [];
//   onSnapshot(list, (snapshot) => {
//     states.push(snapshot)
//   });
//
//   list.add({
//     name: 'Chesterton',
//     price: 10,
//   });
//
//   expect(list.items.length).toBe(1);
//   expect(list.items[0].name).toBe('Chesterton');
//   list.items[0].changeName('Book of G.K. Chesterton');
//   expect(list.items[0].name).toBe('Book of G.K. Chesterton');
//
//   expect(getSnapshot(list)).toMatchSnapshot();
//
//   expect(states).toMatchSnapshot()
// });
//

