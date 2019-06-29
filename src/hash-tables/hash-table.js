"use strict"

/**
 * Hash Table
 * Time Complexity: O(1) - insert, deletion, access
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/8344072#content
 */

class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    const VALUE_PRIME = 96
    const HASH_PRIME = 30
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key[i].charCodeAt(0) - VALUE_PRIME
      hash = (hash * HASH_PRIME + value) % this.keyMap.length;
    }
    return hash;
  }

  set(key,value){
    let i = this._hash(key);
    if (!this.keyMap[i]) this.keyMap[i] = [];
    this.keyMap[i].push([key, value]);
  }

  get(key){
    let i = this._hash(key);
    if (!this.keyMap[i]) return undefined
    for (let j = 0; j < this.keyMap[i].length; j++) {
        if (this.keyMap[i][j][0] === key) return this.keyMap[i][j][1];
    }
    return undefined
  }

  keys(){
    let keys = [];
    this.keyMap.forEach(pairs => {
        pairs.forEach(pair => {
            keys.push(pair[0]);
        });
    });
    return keys;
  }

  values(){
    let values = [];
    this.keyMap.forEach(pairs => {
        pairs.forEach(pair => {
          values.push(pair[1]);
        });
    });
    return values;
  }
}

function test(){
  let ht = new HashTable(17);
  ht.set("maroon","#800000")
  ht.set("yellow","#FFFF00")
  ht.set("olive","#808000")
  ht.set("salmon","#FA8072")
  ht.set("lightcoral","#F08080")
  ht.set("mediumvioletred","#C71585")
  ht.set("plum","#DDA0DD")
  ht.set("purple","#DDA0DD")
  ht.set("violet","#DDA0DD")

  ht.keys().forEach(function(key){
    console.log(ht.get(key));
  })
}
test();