var str = "madam";

var reverse = "";

for(var i=str.length-1; i>-1; i--){
    
    reverse=reverse+str.charAt(i);

}
console.log(reverse)

if(reverse==str){
    console.log("true");
}
else{
    console.log("false");
}