function VelocitySrv($http, baseUrl, maxVelUrl) {
  'ngInject';

  const service = {
    getMaxVel : function() {
      return new Promise((resolve, reject) => {
        $http.get(baseUrl + maxVelUrl).success((data) => {
          resolve(data);
        }).error((err, status) => {
          reject(err, status);
        });
      });
    }
  };

  return service;

}

export default {
  name: 'VelocitySrv',
  fn: VelocitySrv
};
