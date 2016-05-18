function ExampleCtrl(Spotify) {
	'ngInject';

	// ViewModel
	const vm = this;

	vm.title = 'Hi there AngularJS, Gulp, and Browserify! Written with keyboards and love!';
	vm.number = 1234;
	
	Spotify.getTrack('0eGsygTp906u18L0Oimnem').then(function(data) {
		vm.track = data.preview_url;
	});

}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
