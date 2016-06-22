function HomeCtrl($interval, VelocitySrv, PositionsSrv) {
	'ngInject';

	// ViewModel
	const home = this;

	 $interval(function() {
		VelocitySrv.getMaxVel().then(function(data){
			home.velocity = data;
		}, function() {
			console.log('fail');
		});
	}, 1000);

	var stop = $interval(function() {
		PositionsSrv.getCurrentPos().then(function(data){
			home.currentPos = data.lat + ',' + data.long;
		}, function() {
			console.log('fail');
		});
	}, 1000);

	home.stopSrv = function() {
		$interval.cancel(stop);
		stop = undefined;
	}

}

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
