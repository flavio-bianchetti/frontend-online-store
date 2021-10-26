import React from 'react';
import PropTypes from 'prop-types';

class CartProduct extends React.Component {
  render() {
    const {
      thumbnail,
      title,
      price,
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
          <p data-testid="shopping-cart-product-quantity">1</p>
        </div>
      </div>
    );
  }
}

CartProduct.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CartProduct;
