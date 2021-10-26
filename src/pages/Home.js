import React from 'react';
import { Link } from 'react-router-dom';
import CardProduct from '../component/CardProduct';
import { getProductsFromCategoryAndQuery } from '../services/api';
import FilterBar from '../component/FilterBar';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      query: '',
      category: '',
    };
  }

  getProductsFromApi = async () => {
    const { query, category } = this.state;
    const list = await getProductsFromCategoryAndQuery(category, query);
    this.setState({ products: list.results });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.getProductsFromApi();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  renderProductList = () => {
    const { products } = this.state;
    return products.map((product) => (
      <Link
        to={ `/productdetails/${product.id}/${product.category_id}` }
        key={ product.id }
        data-testid="product-detail-link"
      >
        <CardProduct
          key={ product.id }
          title={ product.title }
          price={ product.price }
          thumbnail={ product.thumbnail }
        />
      </Link>
    ));
  }

  render() {
    const { products, category } = this.state;
    return (
      <div>
        <h1>Home</h1>
        <form
          onChange={ this.handleChange }
          onSubmit={ this.handleSubmit }
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
        <div>
          <FilterBar
            category={ category }
            handleChange={ this.handleChange }
            getProductsFromApi={ this.getProductsFromApi }
          />
        </div>
        { products.length > 0 && this.renderProductList() }
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          <button type="button">Carrinho</button>
        </Link>
      </div>
    );
  }
}

export default Home;
