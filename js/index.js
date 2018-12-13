function filer(arr) {
  let argArr = [].slice.call(arguments);
  let arrArr = argArr[0];
  argArr = argArr.slice(1);
  let returnArr = [];

  for (let i = 0; i < arrArr.length; i++) {
    if(argArr.indexOf(arrArr[i]) === -1) {
      returnArr.push(arrArr[i]);
    }
  }
  return returnArr;
}

filer([1, 2, 3, 1, 2, 3], 2, 3);
