function HomeCtrl($interval, VelocitySrv) {
	'ngInject';

	// ViewModel
	const vm = this;

	var stop = $interval(function() {
		VelocitySrv.getMaxVel().then(function(data){
			vm.velocity = data;
		}, function() {
			console.log('fail');
		});
	}, 1000);

	vm.stopSrv = function() {
		$interval.cancel(stop);
		stop = undefined;
	}

}

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
