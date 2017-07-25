'use strict';

function countSameElements(collection) {
  /**
  1、给collection数组去除重复的元素-->
    第1步完成后得到:
    ["a", "e", "h", "t", "f", "c", "g", "b", "d"]

  2、根据 去重 之后的元素，创建一个能统计元素数量的对象，并把对象放在数组中-->
    第2步完成后得到：[
      {key: 'a', count: 0},
      {key: 'e', count: 0},
      {key: 'h', count: 0},
      {key: 't', count: 0},
      {key: 'f', count: 0},
      {key: 'c', count: 0},
      {key: 'g', count: 0},
      {key: 'b', count: 0},
      {key: 'd', count: 0}
    ]
  3、用["a", "e", "h", "t", "f", "c", "g", "b", "d"]来遍历
    collection数组，统计各个元素的数量，再把数量放在count属性中-->
    第3步完成后得到：[
      {key: 'a', count: 3},
      {key: 'e', count: 7},
      {key: 'h', count: 11},
      {key: 't', count: 20},
      {key: 'f', count: 9},
      {key: 'c', count: 8},
      {key: 'g', count: 7},
      {key: 'b', count: 6},
      {key: 'd', count: 5}
    ]
  **/

  //第1步
  var temporaryArray = [];  //创建一个临时数组，用来放置 去重 后的数组
  for (var i = 0; i < collection.length; i++) {
    //如果当前数组的第i项已经保存进了临时数组，那么跳过，
    //否则把当前项push到临时数组里面
    if (temporaryArray.indexOf(collection[i]) == -1) {
      temporaryArray.push(collection[i]);
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
  //用2个for循环，统计collection中每个字母的数量
  for (var i = 0; i < arrObjectCount.length; i++) {
    var number = 0;
    for (var j = 0; j < collection.length; j++) {
      if (arrObjectCount[i].key == collection[j]) {
        number++;
      }
    }
    arrObjectCount[i].count = number;
  }

  return arrObjectCount;
}
