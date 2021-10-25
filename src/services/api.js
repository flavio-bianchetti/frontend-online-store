export async function getCategories() {
  const URL_API = 'https://api.mercadolibre.com/sites/MLB/categories';

  const response = await fetch(URL_API);
  const categoriesList = await response.json();

  return categoriesList;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URL_API = 'https://api.mercadolibre.com/sites/MLB/search?';

  // if (!categoryId && !query) {
  //   return {};
  // }

  // if (categoryId && !query) {
  //   const response = await fetch(`${URL_API}category=${categoryId}`);
  //   const resultList = await response.json();
  //   return resultList;
  // }

  // if (!categoryId && query) {
  //   const response = await fetch(`${URL_API}q=${query}`);
  //   const resultList = await response.json();
  //   return resultList;
  // }

  const response = await fetch(`${URL_API}category=${categoryId}&q=${query}`);
  const resultList = await response.json();
  return resultList;
}
