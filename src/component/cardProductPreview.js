import React from 'react';
import PropTypes from 'prop-types';

class CardProductPreview extends React.Component {
  render() {
    const {
      thumbnail,
      title,
      price,
      id,
      handleClick,
    } = this.props;
    return (
      <div
        className="card"
        data-testid="product"
      >
        <div className="card-image">
          <img src={ thumbnail } alt={ title } />
        </div>
        <div className="card-content">
          <p>{ title }</p>
        </div>
        <div className="card-action">
          <p>{ price }</p>
        </div>
        <div>
          <button
            type="button"
            data-testid="product-add-to-cart"
            name={ id }
            onClick={ handleClick }
          >
            Adicionar ao Carinho
          </button>
        </div>
      </div>
    );
  }
}

CardProductPreview.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CardProductPreview;
