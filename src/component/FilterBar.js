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
      <option data-testid="category" key={ element.id } value={ element.id }>
        {element.name}
      </option>
    ));
    this.setState({
      categories: categoryElements,
    });
  }

  render() {
    const { category } = this.props;
    const { categories } = this.state;
    return (
      <aside>
        <label htmlFor="category-input">
          Categorias
          <select
            name="category"
            id="category-select"
            value={ category }
            onChange={ this.handleChangeFilterBar }
          >
            {categories}
          </select>
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
