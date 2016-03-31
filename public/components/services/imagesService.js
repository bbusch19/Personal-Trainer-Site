angular.module('personalTrainer').service('imagesService', function($http) {
    this.storeImage = function(imageData, fileName) {
        console.log('in service');
        var imageExtension = imageData.split(';')[0].split('/');
        imageExtension = imageExtension[imageExtension.length - 1];

        var newImage = {
          imageName: fileName,
          imageBody: imageData,
          imageExtension: imageExtension,
          userEmail: 'breiden.busch@gmail.com'
      };
      console.log(newImage);
      return $http.post('/api/newimage', newImage);
  };
})
