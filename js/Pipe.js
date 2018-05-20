const Pipe = function(pos, length, speed, ctx){
    this.pos = pos;
    this.length = length;
    this.ctx = ctx;
    this.speed = speed;
};

Pipe.prototype.update = function() {
    this.ctx.save();
};

Pipe.prototype.render = function() {
    this.ctx.save();
    this.ctx.fillStyle = "#748f2e";

    this.ctx.restore();
}
