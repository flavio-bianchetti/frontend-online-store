import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails = async () => {
    const query = '';
    const { match: { params: { id, category_id } } } = this.props;
    const getCategories = await getProductsFromCategoryAndQuery(category_id, query);
    const product = getCategories.results.find((item) => item.id === id);
    this.setState({ product });
  }

  renderProductDetails = () => {
    const { product } = this.state;
    console.log(product);
    const { title, price, thumbnail } = product;
    return (
      <div>
        <h3>{title}</h3>
        <p>
          R$
          {' '}
          {price}
        </p>
        <img src={ thumbnail } alt="" />
      </div>
    );
  }

  render() {
    const { match: { params: { id, category_id } } } = this.props;
    return (
      <div>
        <h1>
          ProductDetails
          {this.renderProductDetails()}
        </h1>
      </div>
    );
  }
}

export default ProductDetails;
