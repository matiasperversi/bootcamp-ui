function HomeCtrl(Spotify) {
	'ngInject';

	// ViewModel
	const vm = this;

	vm.isPlaying = false;
	vm.searchInput = '';
	vm.hero = {
		name: 'Spawn'
	};

	vm.search = function() {
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
	
	Spotify.getTrack('3iyjOwyySLRDEW2tqP7MhX').then(function(data) {
		vm.audio = new Audio(data.preview_url);
		vm.audio.volume = 0.1;
	});

}

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
