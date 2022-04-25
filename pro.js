function person(first,last,age,eyecolor){
    this.firstName="divya",
    this.lastName="s",
    this.age=22,
    this.eyecolor="black"
}
person.prototype.display=function (){
    console.log("eyecolor is "+this.eyecolor);
}
const person1=new person();
person1.display();