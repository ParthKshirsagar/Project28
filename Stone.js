class stone{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:0.5,
            density:1.0
            

        }

        this.radius=radius
        this.body=Bodies.circle(x,y,this.radius/2,options)
        this.image=loadImage("stone.png")
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
         push ();
         translate(pos.x,pos.y)
         imageMode(CENTER);
         image(this.image,0,0,this.radius,this.radius);
         pop ();
    }
}