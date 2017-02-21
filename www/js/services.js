angular.module("futureme.services", [])

.factory ('StorageService', function ($localStorage, $filter) {
  $localStorage = $localStorage.$default({
    things: [
      {
        id: 1,
        title: "bagare",
        image: "Bagare.png",
        description: "Bagare kan arbeta på ett industribageri, ett mindre bageri med tillhörande butik eller på ett konditori. Arbetsuppgifterna skiljer sig åt beroende på var man arbetar men det som tillverkas i en process från ax till limpa är matbröd, vetebröd och kakor.",
        google: 'https://www.google.se/#q=hur+blir+man+bagare',
        path_steps: ""
      },
      {
        id: 2,
        title: "sjuksköterska",
        image: "Sjuksköterska.png",
        description: "Om du känner att du vill hjälpa folk med allt från stora till små sår, men kanske int eplugga lika länge som en läkare. Kan nog sjuksköterska vara något för dig. Men för att bli det är det mycket man måste lära sig.",
        google: 'https://www.google.se/#q=hur+blir+man+sjuksk%C3%B6terska',
        path_steps: ""
      },
      {
        id: 3,
        title: "möbeldesigner",
        image: "Mobeldes.png",
        description: "Att jobba med möbeldesign är ett kreativt och utmanande yrke eftersom det kräver att de lyckas vara orginell och skaffar dig ett eget bildspråk. för att lära dig de grundläggade kunskaperna inom yrket kan en utbildning vara bra.",
        google: 'https://www.google.se/#q=hur+blir+man+m%C3%B6beldesigner',
        path_steps: ""
      },
      {
        id: 4,
        title: "läkare",
        image: "Sjuksköterska.png",
        description: "Vill du kunna göra vad som helst för att hjälpa folk, allt från stå i operation till att vara jour, dynget runt. Är dett något för dig. Men det krävs en utbildning så att du kan lära dig allt för att hjälpa dina medmänniskor.",
        google: 'https://www.google.se/#q=hur+blir+man+l%C3%A4kare',
        path_steps: ""
      }
    ]
  });

  var _getAll = function () {
    return $localStorage.things;
  };
  var _add = function (thing) {
    $localStorage.things.push(thing);
  };
  var _remove = function (thing) {
    $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
  };

  var _getOccupation = function (id) {
    array = $localStorage.things;
    return $filter('filter')(array, {'id': id});
  };

  return {
    getAll: _getAll,
    add: _add,
    remove: _remove,
    getOccupation: _getOccupation
  };
});
