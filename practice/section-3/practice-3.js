'use strict';

function createUpdatedCollection(collectionA, objectB) {
  //第1步
  var temporaryArray = [];  //创建一个临时数组，用来放置 去重 后的数组
  for (var i = 0; i < collectionA.length; i++) {
    //如果当前数组的第i项已经保存进了临时数组，那么跳过，
    //否则把当前项push到临时数组里面
    if (temporaryArray.indexOf(collectionA[i]) == -1) {
      temporaryArray.push(collectionA[i]);
    }
  }

  //第2步
  var arrObjectCount = []; //创建一个专门放置用来统计count的对象的数组
  //根据["a", "e", "h", "t", "f", "c", "g", "b", "d"]里的字母，
  //把类似于{key: 'a', count: 0}的对象写进arrObjectCount里面
  for (var i = 0; i < temporaryArray.length; i++) {
    arrObjectCount.push({
      key: temporaryArray[i],
      count: 0
    });
  }

  //第3步
  //用2个for循环，统计collectionA中每个字母的数量
  for (var i = 0; i < arrObjectCount.length; i++) {
    var number = 0;
    for (var j = 0; j < collectionA.length; j++) {
      if (arrObjectCount[i].key == collectionA[j]) {
        number++;
      }
    }
    arrObjectCount[i].count = number;
  }


  for (var i = 0; i < arrObjectCount.length; i++) {
    for (var j = 0; j < objectB.value.length; j++) {
      if (arrObjectCount[i].key == objectB.value[j]) {
        arrObjectCount[i].count -= parseInt(arrObjectCount[i].count / 3);
        break;
      }
    }
  }
  
  return arrObjectCount;
}
