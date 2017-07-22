'use strict';

function collectSameElements(collectionA, objectB) {
  var sameElementsArr = [];
  for (var i = 0; i < collectionA.length; i++) {
    for (var j = 0; j < objectB.value.length; j++) {
      if (collectionA[i] == objectB.value[j]) {
        sameElementsArr.push(collectionA[i]);
        break;
      }
    }
  }
  return sameElementsArr;
}
