import "./cartButton.scss";

const CartButton = ({ count = 4 }) => (
  <button className="cart">
    <div className="cart__top">
      <span className="cart__count">{count}</span>
      <img src="/cart.png" alt="cart" />
    </div>
    <span className="cart__text">My Cart</span>
  </button>
);

export default CartButton;
