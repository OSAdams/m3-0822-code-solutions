const foo = 'bar';

let i = 0;

i += 1;

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

const baz = () => {
  console.log('qux');
};

baz();

class Nifty {
  constructor(para1, para2, para3) {
    this.para1 = para1;
    this.para2 = para2;
    this.para3 = para3;
  }

  onCall() {
    console.log(this.para1);
  }

  onSnooze() {
    console.log(this.para2);
  }

  onTendies() {
    console.log(this.para3);
  }
}

const helloWorld = new Nifty('Shifty', 'Sleepy', 'Honey Mussy');
const fooBar = () => {
  console.log(helloWorld);
};

helloWorld.onCall();
helloWorld.onSnooze();
helloWorld.onTendies();

function VeryBig(para1, para2, para3) {
  this.para1 = para1;
  this.para2 = para2;
  this.para3 = para3;
}

VeryBig.prototype.onCall = function () {
  console.log(this.para1);
};

VeryBig.prototype.onSnooze = function () {
  console.log(this.para2);
};

VeryBig.prototype.onTendies = function () {
  console.log(this.para3);
};

const bazBuz = () => {
  const tailorMade = new VeryBig('Shifty', 'Sleepy', 'Honey Mussy');
  tailorMade.onCall();
  tailorMade.onSnooze();
  tailorMade.onTendies();
};

bazBuz();
