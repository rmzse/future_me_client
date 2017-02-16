angular.module('futureme.controllers', [])

  .controller('cardsCtrl', function ($scope, $state,  TDCardDelegate) {

    $scope.cards = [
      {title: "bagare", image: "chef.png"},
      {title: "sjuksköterska", image: "nurse.png"}
    ];


    $scope.navigateTo = function (index) {
      $state.go('description', {index: index});
    };
  })

  .controller('DescriptionController', function() {
    console.log('description controller');

    $scope.navigateTo = function (start) {
      $state.go('suggestions', {index: start});
    };
  });
