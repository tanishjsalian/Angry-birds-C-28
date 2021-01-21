class chain{
constructor(obj1,point2){
    var options={
        bodyA: obj1,
        pointB: point2,
        length:10,
        stiffness:0.08
        }
        
         this.chain=Constraint.create(options)
        World.add(myworld,this.chain);
        

}
display(){
    if (this.chain.bodyA!=null){

    
    strokeWeight(5)
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
    }

}
fly(){
    this.chain.bodyA=null
}






}