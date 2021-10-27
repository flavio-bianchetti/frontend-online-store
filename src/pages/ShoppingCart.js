import React, { Component } from 'react';
import CartProduct from '../component/CartProduct';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    this.getCart();
  }

  getCart = async () => {
    const productList = JSON.parse(localStorage.getItem('cart'));
    if (productList) {
      this.setState({
        productList,
      });
    }
  };

  renderProductList = () => {
    const { productList } = this.state;
    return productList.map((product) => (
      <CartProduct
        key={ product.id }
        title={ product.title }
        price={ product.price }
        thumbnail={ product.thumbnail }
      />
    ));
  }

  render() {
    return (
      <div className="shopping-cart">
        <h1>Carrinho de compras</h1>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        { this.renderProductList() }
      </div>
    );
  }
}

export default ShoppingCart;
