function Rink(id){
    this.id = id;
    this.name = null;
    this.playerCapacity = null; // may have multiple ice pads
    this.iceCondition = null;
    this.latitude = null;
    this.longitute = null;
    this.hasNets = null;
}

module.exports = Rink;