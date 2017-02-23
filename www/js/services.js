angular.module("futureme.services", [])

.factory ('StorageService', function ($localStorage, $filter) {
  $localStorage = $localStorage.$default({

    occupations: [
      {
        id: 1,
        title: "bagare",
        image: "Bagare.png",
        description: "Bagare kan arbeta på ett industribageri, ett mindre bageri med tillhörande butik eller på ett konditori. Arbetsuppgifterna skiljer sig åt beroende på var man arbetar men det som tillverkas i en process från ax till limpa är matbröd, vetebröd och kakor.",
        google: 'https://www.google.se/#q=hur+blir+man+bagare',
        path_steps: "Bagare(transparent).png"
      },
      {
        id: 2,
        title: "sjuksköterska",
        image: "Sjuksköterska.png",
        description: "Om du känner att du vill hjälpa folk med allt från stora till små sår, men kanske int eplugga lika länge som en läkare. Kan nog sjuksköterska vara något för dig. Men för att bli det är det mycket man måste lära sig.",
        google: 'https://www.google.se/#q=hur+blir+man+sjuksk%C3%B6terska',
        path_steps: "Nurse(transparent).png"
      },
      {
        id: 3,
        title: "möbeldesigner",
        image: "Mobeldes.png",
        description: "Att jobba med möbeldesign är ett kreativt och utmanande yrke eftersom det kräver att de lyckas vara orginell och skaffar dig ett eget bildspråk. för att lära dig de grundläggade kunskaperna inom yrket kan en utbildning vara bra.",
        google: 'https://www.google.se/#q=hur+blir+man+m%C3%B6beldesigner',
        path_steps: "FurnDesign(transparent).png"
      },
      {
        id: 4,
        title: "läkare",
        image: "Sjuksköterska.png",
        description: "Vill du kunna göra vad som helst för att hjälpa folk, allt från stå i operation till att vara jour, dynget runt. Är dett något för dig. Men det krävs en utbildning så att du kan lära dig allt för att hjälpa dina medmänniskor.",
        google: 'https://www.google.se/#q=hur+blir+man+l%C3%A4kare',
        path_steps: "Nurse(transparent).png"
      }
    ],
    saved_occupations: []
  });

  var _getAll = function () {
    return $localStorage.occupations;
  };
  var _add = function (occupation) {
    $localStorage.occupations.push(occupation);
  };
  var _remove = function (occupation) {
    $localStorage.occupations.splice($localStorage.occupations.indexOf(occupation), 1);
  };

  var _getOccupation = function (id) {
    array = $localStorage.occupations;
    return $filter('filter')(array, {'id': id});
  };

  var _saveOccupation = function (occupation) {
    for (var i = 0; i < $localStorage.saved_occupations.length; i++) {
      if ($localStorage.saved_occupations[i].id === occupation.id) {
        return;
      }
    }
    $localStorage.saved_occupations.push(occupation);
  };

  var _getSaved = function () {
    return $localStorage.saved_occupations;
  };

  return {
    getAll: _getAll,
    add: _add,
    remove: _remove,
    getOccupation: _getOccupation,
    saveOccupation: _saveOccupation,
    getSaved: _getSaved
  };
});
