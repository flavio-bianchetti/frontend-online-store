import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartProduct from '../component/CartProduct';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      quantityProducts: [],
    };
  }

  componentDidMount() {
    this.getCart();
  }

  handleClick = (event) => {
    event.preventDefault();
    const { name } = event.target;
    const indexQuantity = name.split('-');
    let newValue = (event.target.innerHTML === '+'
      ? Number(indexQuantity[1]) + 1
      : Number(indexQuantity[1]) - 1);
    newValue = (newValue < 1 ? 1 : newValue);
    const { quantityProducts } = this.state;
    quantityProducts[indexQuantity[0]] = newValue;
    this.setState({
      quantityProducts,
    }, this.saveQuantityCart);
  };

  saveQuantityCart = () => {
    const { quantityProducts } = this.state;
    localStorage.setItem('quantity', JSON.stringify(quantityProducts));
  }

  getCart = async () => {
    const productList = JSON.parse(localStorage.getItem('cart'));
    const quantityProducts = JSON.parse(localStorage.getItem('quantity'));
    if (productList) {
      this.setState({
        productList,
        quantityProducts,
      });
    }
  };

  renderProductList = () => {
    const { productList, quantityProducts } = this.state;
    return productList.map((product, index) => (
      <CartProduct
        key={ product.id }
        id={ index }
        title={ product.title }
        price={ product.price }
        thumbnail={ product.thumbnail }
        quantity={ quantityProducts[index] }
        onClick={ this.handleClick }
        availableQuantity={ product.available_quantity }
      />
    ));
  };

  render() {
    return (
      <div className="shopping-cart">
        <h1>Carrinho de compras</h1>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        { this.renderProductList() }
        <div>
          <Link
            to="/confirmorder"
            data-testid="checkout-products"
          >
            Finalizar compra
          </Link>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
