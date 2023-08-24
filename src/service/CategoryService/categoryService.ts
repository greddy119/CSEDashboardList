import http from '../http';

export const getCategories = () => {
  return http.get('products/categories').then((response) => response.data);
};
