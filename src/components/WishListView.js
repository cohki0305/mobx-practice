import React from 'react'
import WishListItemView from './WishListItemView'
import { observer } from 'mobx-react'

const WishListView = ({wishList}) => {
  return (
    <div className="list">
      <ul>
        {wishList.items.map((item, idx) => {
          return <WishListItemView item={item} key={idx}/>
        })}
        Total: {wishList.totalPrice}
      </ul>
    </div>
  )
}

export default observer(WishListView)
