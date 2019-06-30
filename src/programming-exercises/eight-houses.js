/**
 * Amazon demo test: Eight houses.
 * Neighbors on both th sides of cell either active or inactive, the
 * cell becomes inactive on the next day. Otherwise the cell becomes active.
 */

function cellCompete(states, days) {
  let newStates = [];
  while (days) {
    for (let i = 0; i < states.length; i++) {
      if ((states[i - 1] && states[i + 1]) ||
        (!states[i - 1] && !states[i + 1])) newStates[i] = 0;
      else newStates[i] = 1;
    }
    states = [...newStates];
    days--;
  }
  return newStates;
}

function test() {
  cellCompete([1, 0, 0, 0, 0, 1, 0, 0], 1) // [0,1,0,0,1,0,1,0]
  cellCompete([1, 1, 1, 0, 1, 1, 1, 1], 2) // [0,0,0,0,0,1,1,0]
}