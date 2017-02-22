angular.module('futureme.controllers', [])

  .controller('cardsCtrl', function ($scope, TDCardDelegate, $timeout, StorageService, $ionicLoading) {

    var cards = StorageService.getAll();

    $scope.cards = {
      master: Array.prototype.slice.call(cards, 0),
      active: Array.prototype.slice.call(cards, 0)
    };

    $scope.cardDestroyed = function (index) {
      $scope.cards.active.splice(index, 1);
      if ($scope.cards.active.length === 0)
        $scope.refreshCards();
    };

    $scope.$on('removeCard', function (event, element, card) {
      $scope.cards.active.splice($scope.cards.active.indexOf(card), 0);
    });

    $scope.addCard = function () {
      var newCard = cardTypes[0];
      $scope.cards.active.push(angular.extend({}, newCard));
    };

    $scope.refreshCards = function () {
      $scope.cards.active = null;
      $timeout(function () {
        $scope.cards.active = Array.prototype.slice.call($scope.cards.master, 0);
      });
    };

    $scope.cardSwipedLeft = function (index) {
    };

    $scope.cardSwipedRight = function (index) {
    };

    $scope.saveThisOccupation = function (occupation) {
      $ionicLoading.show({
        template: 'Jobb sparat!',
        duration: 600
      });
      StorageService.saveOccupation(occupation);
    };
  })

  .controller('descriptionCtrl', function ($scope, $ionicHistory, $stateParams, StorageService, $ionicLoading) {

    $scope.occupation = StorageService.getOccupation($stateParams.id)[0];

    $scope.saveThisOccupation = function () {
      $ionicLoading.show({
        template: 'Jobb sparat!',
        duration: 600
      });
      StorageService.saveOccupation($scope.occupation);
    };

    $scope.myGoBack = function () {
      $ionicHistory.goBack();
    };

    $scope.gotoGoogle = function (link) {
      window.open(link, '_system');
    }
  })

  .controller('pathCtrl', function ($scope, $ionicHistory, $stateParams, StorageService, $ionicLoading) {

    $scope.occupation = StorageService.getOccupation($stateParams.id)[0];

    $scope.saveThisOccupation = function () {
      $ionicLoading.show({
        template: 'Jobb sparat!',
        duration: 600
      });
      StorageService.saveOccupation($scope.occupation);
    };

    $scope.myGoBack = function () {
      $ionicHistory.goBack();
    };
  })

  .controller('libraryController', function ($scope, $ionicHistory, StorageService) {

    $scope.savedCards = StorageService.getSaved();
    console.log($scope.savedCards);

    $scope.pairs = [];

    $scope.pairOutput = function(a) {
        var temp = a;
        var arr = [];

        while (temp.length < 1) {
          arr.push(temp.splice(0,2));
        }
        return arr;
    };

    $scope.pairs = $scope.pairOutput($scope.savedCards);
    console.log($scope.pairs);

    $scope.myGoBack = function () {
      $ionicHistory.goBack();
    };
  });
