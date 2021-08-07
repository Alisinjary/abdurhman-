
for( var i=0; i < 10; i++){
    document.getElementById("demo11").innerHTML +=i + "<br>";
}
 

var person = {
    firstName: "Ali",
    LastName:"Abd",
     age : 35,
}
 var d ;
 var text = "";
 
 for( d in person){
     text += person[d] + "  "
 }
 document.getElementById("demo").innerHTML =text



//do while
 
 var x =11;

 do{
  document.getElementById("demo1").innerHTML +=x  +  "<br>";
     x++;

 }while ( x < 20)


//do
  var q= 5;
  while(q<10){
  document.getElementById("demo2").innerHTML +=q+"<br>";
  q++
}


 //hosting verbiels
f = 5; // Assign 5 to x

elem = document.getElementById("demo3"); // Find an element 
elem.innerHTML = f;           // Display x in the element

var f; // Declare x




try{
    var kk = parseInt(prompt("what is your age?"));

    
 if(kk < 10){
    throw "less than ";
}else if( kk >  20){
    throw"biggar than";

}else{
    alert("hello");
}
console.log("hello");


}catch(e){
    alert("hello error");
    console.log("xxcxcxcxcxc");
}finally{
    document.getElementById("demo4").innerHTML="ali abdulsattar"
}







function myfunction (s,m) {
  
    
    return s+m;
    
    
    
} 

 document.getElementById("demo5").innerHTML =myfunction(4,5);


const ll = function (tt,ff) {return tt * ff};
document.getElementById("demo6").innerHTML = ll(4,3);




