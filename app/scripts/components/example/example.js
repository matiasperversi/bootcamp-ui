const ExampleComponent = {
    templateUrl: 'components/example/example.html',
	controller: function(){},
	bindings: {
		hero: '='
	}
};

export default {
  name: 'exampleComponent',
  object: ExampleComponent
};