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
    const { match: { params: { id, categoryId } } } = this.props;
    const getCategories = await getProductsFromCategoryAndQuery(categoryId, query);
    const product = getCategories.results.find((item) => item.id === id);
    this.setState({ product });
  }

  renderProductDetails = () => {
    const { product } = this.state;
    const { title, price, thumbnail } = product;
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
        </div>
        <div>
          <h3>Detalhes do produto</h3>
        </div>
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

export default ProductDetails;
