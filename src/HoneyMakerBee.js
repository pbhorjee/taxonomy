// var HoneyMakerBee = function() {
//   Bee.call(this);

//   this.age = 10;
//   this.job = 'make honey';
//   this.honeyPot = 0;
// };

// HoneyMakerBee.prototype = Object.create(Bee.prototype);

// HoneyMakerBee.prototype = {
//   makeHoney: function() {
//     this.honeyPot++;
//   },
//   giveHoney: function() {
//     this.honeyPot--;
//   }
//   //,
//   // eat: function () {
//   //   Bee.prototype.eat.call(this);
//   //}
// };

// HoneyMakerBee.prototype.constructor = HoneyMakerBee;

var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype = {
  makeHoney: function () {
    this.honeyPot++;
  },
  giveHoney: function () {
    this.honeyPot--;
  },
  eat: function () {
    Bee.prototype.eat.call(this);
  }
};

HoneyMakerBee.prototype.constructor = HoneyMakerBee;
