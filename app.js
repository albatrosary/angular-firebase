angular
  .module("sampleApp", ["firebase"])
  .controller("SampleCtrl", function($scope, $firebaseArray) {
  
  var ref = new Firebase("https://sweltering-inferno-4088.firebaseio.com/messages");

  // create a synchronized array
  $scope.messages = $firebaseArray(ref);

  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  };

  // click on `index.html` above to see $remove() and $save() in action
});