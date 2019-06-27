/**
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/9816154
 * Description: Write a function called collectStrings which accepts an object and
 * returns an array of all the values in the object that have a typeof string.
 */


function collectStrings(obj) {
  let arr = [];

  function gatheringHelper(obj) {
      for (let key in obj) {
        if (typeof obj[key] === 'string') arr.push(obj[key]);
        else if (typeof obj[key] === 'object') gatheringHelper(obj[key]);
      }
  }

  gatheringHelper(obj);
  return arr;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])