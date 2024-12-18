import * as components from './components';

const install = function(Vue) {
  if (install.installed) return;
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
};
const API = {
  install,
}
export default API;
export * from './components';

