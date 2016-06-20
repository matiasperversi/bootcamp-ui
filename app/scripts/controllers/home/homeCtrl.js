function HomeCtrl(VelocitySrv) {
	'ngInject';

	// ViewModel
	const vm = this;

	vm.callSrv = function() {
		VelocitySrv.getMaxVel().then(function(){
			console.log('hola');
		}, function() {
			console.log('fail');
		});
	}

}

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
