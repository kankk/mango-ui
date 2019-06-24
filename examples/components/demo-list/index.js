import DemoList from './List.vue';
import DemoListItem from './ListItem.vue';

DemoList.install = function (Vue) {
  Vue.component(DemoList.name, DemoList);
  Vue.component(DemoListItem.name, DemoListItem);
};

export default DemoList;
