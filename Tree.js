class tree {
    constructor(x,y,width,height){
           
            
             this.width=380,
             this.height=400,
             this.lbody=Bodies.rectangle(x-50,y,width/30,height/4,{isStatic:true});
             this.gbody=Bodies.rectangle(x,y,width,height/40,{isStatic:true});
             this.rbody=Bodies.rectangle(x+50,y,width/30,height/4,{isStatic:true});
           
             this.image=loadImage("tree.png")
             World.add(world,this.lbody) ;
             World.add(world,this.gbody) ;
             World.add(world,this.rbody) ;
    
    
               }
               display(){
                push ();
                translate(this.gbody.position.x,this.gbody.position.y);
                imageMode (CENTER);
                image(this.image,0,0,this.width,this.height);
                pop ();
    }
    }