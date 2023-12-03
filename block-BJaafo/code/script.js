function fullName (firstName,secondName){
    result= firstName+" "+secondName;
}
fullName("Kill","Bill");
// tests 
if(fullName!=="Arya Stark"){
    throw new Error(`${result} is causing unexpected error`);
}
    
if(fullName!=="John Doe"){
    throw new Error("Test is failed");
        
}
    





function totalCost(amnt,taxRate) {
    total=amnt+(amnt*taxRate);
    return total;
  }
  let cost=totalCost(15,10);
  let assumedRate=1500;
//   first
if(assumedRate!==result){
    throw new Error(`${assumedRate} is not equal to ${total}`);
}
// second
let assumedRate2=500;
if(assumedRate2!==total){
    throw new Error(`${assumedRate2} is not equal to ${total}`);
}
// no we cannot see the output of the second test on the output