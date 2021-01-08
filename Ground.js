class Ground{
    constructor(x,y){
        var options = {
            isStatic:true,
        }
        this.body=Bodies.rectangle(x,y,1600,10,options);
        this.width=1600;
        this.height=10;
        World.add(world,this.body);
 }
        display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height);
        }
 };