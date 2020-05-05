export const subscribeHandler = (mutation, state) => {
  switch (mutation.type) {
    case 'rules/setCategoriesOrder':
    case 'rules/deleteCategoryOrder':
      localStorage.setItem('rules/categoriesOrder', JSON.stringify(state.rules.categoriesOrder));
      break;
    default:
      console.log('reload vendors in plugin!');
      break;
  }
};

const reloadVeendors = (store) => {
  store.subscribe(subscribeHandler);
};

export default reloadVeendors;
