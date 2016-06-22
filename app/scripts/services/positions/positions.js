function PositionsSrv($http, baseUrl, currentPosUrl) {
  'ngInject';

  const service = {
    getCurrentPos : function() {
      return new Promise((resolve, reject) => {
        $http.get(baseUrl + currentPosUrl).success((data) => {
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
  name: 'PositionsSrv',
  fn: PositionsSrv
};
