import React from 'react';
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

  async renderCategories() {
    const categories = await getCategories();
    const categoryElements = categories.map((element) => (
      <li data-testid="category" key={ element.id } id={ element.id }>
        {element.name}
      </li>
    ));
    this.setState({
      categories: categoryElements,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <aside>
        <h2>Categorias</h2>
        <ul>
          {categories}
        </ul>
      </aside>
    );
  }
}

export default FilterBar;
