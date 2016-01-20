export class MainService {
  constructor ($log, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.jsonAssetsURL = '/assets/json/';
  }

  getMediaSources() {
    
    return this.$http.get(this.jsonAssetsURL + 'mediaSources.json')
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      });
  }
}
