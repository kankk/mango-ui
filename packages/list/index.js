import List from './src/main';

// eslint-disable-line
List.install = function (Vue) {
  Vue.component(List.name, List);
};

export default List;
