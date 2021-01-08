class Dustbin{
   constructor(x,y){
       var options = {
           isStatic:true,
       }
       this.body=Bodies.rectangle(x,y,20,10,options);
       this.width=20;
       this.height=10;
       World.add(world,this.body);
}
       display(){
       var pos=this.body.position;
       push()
       translate(pos.x,pos.y);
       rectMode(CENTER);
       fill(255);
       rect(pos.x,pos.y,this.width,this.height);
       }
};