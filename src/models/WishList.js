import { types } from 'mobx-state-tree'

// model is immutable

export const WishListItem = types
  .model({
    name: types.string,
    price: types.number,
    image: ""
  })
  .actions(self => ({
    changeName(newName){
      self.name = newName
    },
    changePrice(newPrice){
      self.price = newPrice
    }
  }))

export const WishList = types
  .model({
    items: types.optional(types.array(WishListItem), [])
  })
  .actions(self => ({
    add(item) {
      self.items.push(item)
    }
  }))
