angular.module('myApp', ['ngMaterial','ngMessages','firebase'])
.run(function() {
	console.log("working");
})

.controller('appCtrl',function($http,$scope,$mdToast,$firebaseStorage,$firebaseArray,$firebase){
  $scope.showSimpleToast = function() {
    $mdToast.show(
      $mdToast.simple()
        .textContent('Simple Toast!')
        .hideDelay(3000)
    );
  };

  var ref = firebase.database().ref();
  // create a synchronized array
ref.on('value', function(snapshot) {
   console.log(snapshot.val());
});
    $scope.add = function(form) {
      if(form.$valid){
        document.getElementById("myForm").reset();
        ref.child(form.userName).set(form);
  //form.email = "";
            $mdToast.show(
          $mdToast.simple()
            .textContent('Thank You, we will get back to you shortly')
            .hideDelay(3000)
        );        
      }

    }
})


(function(){


  // Initialize Firebase
console.log();
  var config = {
    apiKey: "AIzaSyAs8IuBk3QDjawLz2TY_VzpgZrJxyBOPR8",
    authDomain: "finomaterial.firebaseapp.com",
    databaseURL: "https://finomaterial.firebaseio.com",
    storageBucket: "finomaterial.appspot.com",
    messagingSenderId: "490188063197"

  };

  firebase.initializeApp(config);


}())