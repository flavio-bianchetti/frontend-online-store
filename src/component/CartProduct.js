import React from 'react';
import PropTypes from 'prop-types';

class CartProduct extends React.Component {
  render() {
    const {
      id,
      thumbnail,
      title,
      price,
      quantity,
      onClick,
    } = this.props;
    return (
      <div
        className="card"
        data-testid="product"
      >
        <div className="card-image">
          <img src={ thumbnail } alt={ title } />
        </div>
        <div className="card-content">
          <p data-testid="shopping-cart-product-name">{ title }</p>
        </div>
        <div className="card-action">
          <p>{ price }</p>
        </div>

        <div>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            name={ `${id}-${quantity}` }
            onClick={ onClick }
          >
            -
          </button>
          <span
            data-testid="shopping-cart-product-quantity"
          >
            { quantity }
          </span>
          <button
            data-testid="product-increase-quantity"
            type="button"
            name={ `${id}-${quantity}` }
            onClick={ onClick }
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

CartProduct.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CartProduct;
