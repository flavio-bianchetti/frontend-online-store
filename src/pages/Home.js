import React from 'react';
import { Link } from 'react-router-dom';
import CardProduct from '../component/CardProduct';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      query: '',
      category: '',
    };
  }

  getProductsFromApi = async (event) => {
    event.preventDefault();
    const { query, category } = this.state;
    const list = await getProductsFromCategoryAndQuery(category, query);
    this.setState({ products: list.results });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  renderProductList = () => {
    const { products } = this.state;
    return products.map((product) => (
      <CardProduct
        key={ product.id }
        title={ product.title }
        price={ product.price }
        thumbnail={ product.thumbnail }
      />
    ));
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <h1>Home</h1>
        <form
          onChange={ this.handleChange }
          onSubmit={ this.getProductsFromApi }
        >
          <input
            data-testid="query-input"
            type="text"
            name="query"
            id="query-input"
            placeholder="Search"
          />
          <button
            data-testid="query-button"
            type="submit"
          >
            busca
          </button>
        </form>
        <div />

        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        { products.length > 0 && this.renderProductList() }

        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          <button type="button">Carrinho</button>
        </Link>

      </div>
    );
  }
}

export default Home;
