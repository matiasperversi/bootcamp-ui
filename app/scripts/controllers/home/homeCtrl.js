function HomeCtrl(Spotify) {
	'ngInject';

	// ViewModel
	const vm = this;

	vm.isPlaying = false;
	vm.searchInput = '';

	vm.search = function() {
		console.log('hola');
		Spotify.search('the killers','artist').then(function(data) {
			console.log(data);
		});
	}

	vm.isPaused = function() {
		return !vm.isPlaying;
	}

	vm.play = function() {
		vm.audio.play();
		vm.isPlaying = true;
	}

	vm.pause = function() {
		vm.audio.pause();
		vm.isPlaying = false;
	}
	
	Spotify.getTrack('0eGsygTp906u18L0Oimnem').then(function(data) {
		vm.audio = new Audio(data.preview_url);
		vm.audio.volume = 0.1;
	});

}

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};