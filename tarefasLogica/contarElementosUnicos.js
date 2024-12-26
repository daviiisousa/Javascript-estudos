function contarElementosUnicos(array) {

  if (array[1] === array[2]) {
    array.splice(2, 1);
  }

  if (array[3] === array[4]) {
    array.splice(4, 1);
  }

  console.log(array);
}

contarElementosUnicos([1, 2, 2, 3, 4, 4, 5])