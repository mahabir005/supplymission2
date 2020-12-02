class Horizontal{

    constructor( x, y, width, height ){

        var options = {

            isStatic : true,

        }

        this.body = Bodies.rectangle(x, y, 100, 15, options);
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);

        //rectMode(CENTER);
        fill("red");
        rect(0, 0, 210, 15);
        pop();
    }
}