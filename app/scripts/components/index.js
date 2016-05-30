import angular from 'angular';

const bulk = require('bulk-require');
const componentsModule = angular.module('app.components', []);
const components = bulk(__dirname, ['./**/!(*index|*.spec).js']);

function declare(componentMap) {
  Object.keys(componentMap).forEach((key) => {
    let item = componentMap[key];

    if (!item) {
      return;
    }

    if (item.object && typeof item.object === 'object') {
      componentsModule.component(item.name, item.object);
    } else {
      declare(item);
    }
  });
}

declare(components);

export default componentsModule;
