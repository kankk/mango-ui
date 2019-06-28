import ListItem from './src/main';

// eslint-disable-line
ListItem.install = function (Vue) {
  Vue.component(ListItem.name, ListItem);
};

export default ListItem;
