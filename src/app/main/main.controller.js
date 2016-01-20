export class MainController {
  constructor (MainService, $log) {
    'ngInject';

    this.MainService = MainService;
    this.$log=$log;
    this.activate();
  }

  activate() {
    this.MainService.getMediaSources().then((response)=>{
      this.mediaSources = response;
    });
  }

  openVideo(src){
    this.$log.info(src);
  }
}
