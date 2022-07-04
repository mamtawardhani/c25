class Ground{

    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h, {isStatic: true})
        this.w = w
        this.h = h
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position
        var ang = this.body.angle
        Matter.Body.rotate(this.body, angle)
        rectMode(CENTER)
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        rect(0,0, this.w, this.h)
        pop()
        angle = angle + 0.1
    }
}