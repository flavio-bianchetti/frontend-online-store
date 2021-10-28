import React from 'react';

class SelectCategory extends React.Component {
  render() {
    const {
      categories,
      onChange,
    } = this.props;
    return (
      <select
        onChange={ onChange }
        name="category"
      >
        <option
          key="-1"
          value=""
        >
          Todas as categorias
        </option>
        {
          categories.map((category) => (
            <option
              key={ category.id }
              value={ category.id }
              data-testid="category"
            >
              { category.name }
            </option>
          ))
        }
      </select>
    );
  }
}

export default SelectCategory;
