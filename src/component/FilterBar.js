import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class FilterBar extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount = () => {
    this.renderCategories();
  }

  handleChangeFilterBar = async (event) => {
    const { handleChange, getProductsFromApi } = this.props;
    await handleChange(event);
    await getProductsFromApi();
  }

  async renderCategories() {
    const categories = await getCategories();
    const categoryElements = categories.map((element) => (
      <div key={ element.id }>
        <label htmlFor={ element.id }>
          <input
            type="radio"
            data-testid="category"
            id={ element.id }
            value={ element.id }
            name="category"
            onChange={ this.handleChangeFilterBar }
          />
          { element.name }
        </label>
      </div>
    ));
    this.setState({
      categories: categoryElements,
    });
  }

  render() {
    // const { category } = this.props;
    const { categories } = this.state;
    return (
      <aside>
        <label htmlFor="category-input">
          Categorias
          {categories}
        </label>
      </aside>
    );
  }
}

FilterBar.propTypes = {
  category: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getProductsFromApi: PropTypes.func.isRequired,
};

export default FilterBar;
