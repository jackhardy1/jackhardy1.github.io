instaApp.controller('InstaController', ['InstaFactory','$scope', 'Upload', 'S3UploadService', function(InstaFactory,$scope, Upload, S3UploadService){

  var self = this;
  var image = "https://s3-us-west-2.amazonaws.com/insta-mean/burning-man4.jpeg"
  self.instas = [new InstaFactory('Insta1', image, true),
  new InstaFactory('Insta2', image, false)];

  self.addInsta = function(text){
    var image = localStorage.getItem("imageUrl");
    self.instas.push(new InstaFactory(text,image));
    localStorage.setItem("imageUrl","");
  }

  self.isImageUploaded = function(){
    localStorage.getItem("imageUrl") !== "";
  }

  self.removeInsta = function(){
    self.instas.pop();
  }

  $scope.uploadFiles = function (files) {
    $scope.Files = files;
    if (files && files.length > 0) {
      angular.forEach($scope.Files, function (file, key) {
        S3UploadService.Upload(file).then(function (result) {
          file.Success = true;
          var imageUrl = 'https://s3-us-west-2.amazonaws.com/insta-mean/' + file.name;
          localStorage.setItem("imageUrl",imageUrl);
          
        }, function (error) {
          $scope.Error = error;

        }, function (progress) {
          file.Progress = (progress.loaded / progress.total) * 100
        });
      });
    }
  };

}]);
