/**
 * Pattern: Factory function
 * It is possible to use factory function instead of Classes,
 * because DOM does not reffer on created instance (for e. g. in click function)
 * and it is shorter and still readable (to call correct instance).
 */

 // So previous sentense mean, that instead of following class ...

class Dog {
  constructor() {
    this.sound = 'woof';
  }
  talk() {
    console.log(this.sound);
  }
}
const sniffels = new Dog()
sniffels.talk();

document.querySelector('.myButton').click( _ => sniffels.talk);

// We will use following factory function:

const dog = () => {
  const sound = 'woof'
  return {
    talk: () => console.log(sound)
  }
}
const sniffels = dog();
sniffels.talk();

document.querySelector('.myButton').click(sniffels.talk);