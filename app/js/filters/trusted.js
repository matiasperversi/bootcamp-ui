function TrustedFilter($sce) {
	'ngInject';

	return function(url) {
		return $sce.trustAsResourceUrl(url);
	};

}

export default {
  name: 'TrustedFilter',
  fn: TrustedFilter
};