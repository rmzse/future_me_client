angular.module('futureme.controllers', [])

  .controller('cardsCtrl', function ($scope, TDCardDelegate) {

    $scope.cards = [
      {title: "bagare", image: "../img/chef.png"},
      {title: "sjuksköterska", image: "../img/nurse.png"}
    ]

  });
