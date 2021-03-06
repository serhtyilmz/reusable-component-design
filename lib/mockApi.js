import { categories, products } from './mockData';

export const getCategoriesByParent = (parentId) => {
  const result = categories.filter((category) => category.parent === parentId);

  return Promise.resolve(result);
};

export const getMainCategories = () => getCategoriesByParent(undefined);

export const getProducts = () => Promise.resolve(products);

export const getProduct = (id) => {
  const result = products.find((product) => product.id === id);

  return Promise.resolve(result);
};
