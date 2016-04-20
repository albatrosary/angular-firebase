angular
  .module("sampleApp", ["firebase"])
  .controller("SampleCtrl", function($firebaseArray) {
  
    var ctrl = this;
    var ref = new Firebase("https://sweltering-inferno-4088.firebaseio.com/messages");
    
    // create a synchronized array
    ctrl.messages = $firebaseArray(ref);

    // add new items to the array
    // the message is automatically added to our Firebase database!
    ctrl.addMessage = function() {
      ctrl.messages.$add({
        text: ctrl.newMessageText
      });
    };

  // click on `index.html` above to see $remove() and $save() in action
});