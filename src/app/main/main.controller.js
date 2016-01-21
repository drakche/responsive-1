export class MainController {
  constructor (MainService, $scope, $log, ngDialog) {
    'ngInject';

    this.MainService = MainService;
    this.ngDialog = ngDialog;
    this.$log=$log;
    this.$scope = $scope;
    this.activate();
  }

  activate() {
    this.MainService.getMediaSources().then((response)=>{
      this.mediaSources = response;
    });
  }

  clickPlaceholder(){
    this.$log.info('Field clicked');
  }

  openVideo(src){
    this.$scope.videoSrc = src.videoSrc;  
    this.$scope.playerVars = {
      controls: 0,
      autoplay: 1
    } 
    this.ngDialog.open({ 
      template: 'videoModal',
      scope: this.$scope
       });
  }
}
