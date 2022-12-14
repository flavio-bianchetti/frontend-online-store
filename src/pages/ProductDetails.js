import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      cartProducts: [],
      quantityProducts: [],
    };
  }

  componentDidMount() {
    this.getProductDetails();
    this.getCart();
  }

  getCart = () => {
    const cartProducts = JSON.parse(localStorage.getItem('cart'));
    const quantityProducts = JSON.parse(localStorage.getItem('quantity'));
    if (cartProducts) {
      this.setState({
        cartProducts,
        quantityProducts,
      });
    }
  };

  getProductDetails = async () => {
    const query = '';
    const { match: { params: { id, categoryId } } } = this.props;
    const getCategories = await getProductsFromCategoryAndQuery(categoryId, query);
    const product = getCategories.results.find((item) => item.id === id);
    this.setState({ product });
  }

  handleCartQuantity = () => {
    const { quantityProducts } = this.state;
    const sumQuantity = quantityProducts.reduce((acc, curr) => acc + curr, 0);
    return sumQuantity;
  }

  handleAddCartButtonClick = () => {
    const { product } = this.state;

    this.setState((prevState) => ({
      cartProducts: [...prevState.cartProducts, product],
      quantityProducts: [...prevState.quantityProducts, 1],
    }), () => {
      const { cartProducts, quantityProducts } = this.state;
      localStorage.setItem('cart', JSON.stringify(cartProducts));
      localStorage.setItem('quantity', JSON.stringify(quantityProducts));
    });
  }

  renderProductDetails = () => {
    const { product, cartProducts } = this.state;
    const { title, price, thumbnail, id } = product;
    return (
      <div>
        <div>
          <h3 data-testid="product-detail-name">{title}</h3>
          <p>
            R$
            {' '}
            {price}
          </p>
          <img src={ thumbnail } alt="" />
          <button
            type="submit"
            data-testid="product-detail-add-to-cart"
            name={ id }
            onClick={ this.handleAddCartButtonClick }
          >
            Adicionar ao carrinho

          </button>
        </div>
        <Link
          to={ { pathname: '/shoppingcart', state: { cartProducts } } }
          data-testid="shopping-cart-button"
        >
          <button
            type="button"
          >
            Carrinho
            <span
              data-testid="shopping-cart-size"
            >
              {` - ${this.handleCartQuantity()}`}

            </span>

          </button>
        </Link>
        <div>
          <h3>Detalhes do produto</h3>
        </div>
        <form>
          Avalia????es
          <div>
            <label htmlFor="email-avaliator">
              <input
                type="email"
                placeholder="email"
              />
            </label>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
          <div>
            <label htmlFor="message">
              <textarea
                id="message"
                data-testid="product-detail-evaluation"
                placeholder="Mensagem (opcional)"
              />
            </label>
          </div>
          <div>
            <button type="submit">Avaliar</button>
          </div>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>
          ProductDetails
          { this.renderProductDetails() }
        </h1>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      categoryId: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
