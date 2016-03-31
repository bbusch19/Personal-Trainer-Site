angular.module('personalTrainer').directive('fileread', function (imagesService, mainSvc) {

  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      elem.bind("change", function (changeEvent) {
        var reader = new FileReader();

        reader.onloadend = function (loadEvent) {
          var fileread = loadEvent.target.result;
          var tempArray = elem[0].value.split('\\');
          var fileName = tempArray[tempArray.length - 1];
          console.log('in directive');
          imagesService.storeImage(fileread, fileName)
          .then(function (result) {
              mainSvc.getProfile().then(function(response) {
                  var profile = response.data;
                  profile.image = result.data.Location;
                  mainSvc.updateProfile(profile);
                  console.log(profile);
              })

            //   mainSvc.updateProfile(profile);
          })
          .catch(function (err) {
            console.error(err);
          });
        }

        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  }
  })
