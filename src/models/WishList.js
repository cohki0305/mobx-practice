import { types, getParent, destroy } from 'mobx-state-tree'

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
    },
    changeImage(newImage){
      self.image = newImage
    },
    remove(){
      getParent(self, 2).remove(self)
    }
  }))

export const WishList = types
  .model({
    items: types.optional(types.array(WishListItem), []),
  })
  .actions(self => ({
    add(item) {
      self.items.push(item)
    },
    remove(item){
      destroy(item)
    }
  }))
  .views(self => ({
    // cached
    get totalPrice(){
      return self.items.reduce((sum, entry) => {
        return sum + entry.price
      }, 0)
    }
  }))
