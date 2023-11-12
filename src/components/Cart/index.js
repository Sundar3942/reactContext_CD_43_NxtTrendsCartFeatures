import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
      const onClickRemoveAll = () => {
        removeAllCartItems()
      }

      const renderTotalPrice = () => {
        const totalPrice = cartList.reduce(
          (res, item) => res + item.quantity * item.price,
          0,
        )
        console.log(totalPrice)
        return totalPrice
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  className="remove-all-btn"
                  onClick={onClickRemoveAll}
                >
                  Remove All
                </button>
                <CartListView />
                {/* TODO: Add your code for Cart Summary here */}
                <div className="cart-summary">
                  <h2>
                    Order Total: <span>Rs {renderTotalPrice()}</span>
                  </h2>
                  <p>{cartList.length} items in cart</p>
                  <button type="button" className="checkout-btn">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
