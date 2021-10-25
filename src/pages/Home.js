import React from 'react';
import FilterBar from '../component/FilterBar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <input
          type="text"
          name="home-search-input"
          id="home-search-input"
          placeholder="Search"
        />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <FilterBar />
        </div>
      </div>
    );
  }
}

export default Home;
