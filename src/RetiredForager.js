var RetiredForagerBee = function() {
  ForagerBee.call(this);

  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.age = 'grey';
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

RetiredForagerBee.prototype = {
  forage: ;function() {
    return "I am too old, let me play cards instead";
  },
  eat: function () {
    Bee.prototype.eat.call(this);
  },
  gamble: function(treasure) {
    this.treasureChest.push(treasure);
  },
};

RetiredForagerBee.prototype.constructor = RetiredForagerBee;