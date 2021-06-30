var state={name:"kerala",confirmed_cases:500,cured:5000}
//print state aname
console.log(state["name"])
//print confirmed_cases
console.log(state["confirmed_cases"]);
//check death key is present or not
console.log("death" in state);
//if death doesnot exist add death:100
if(!("death" in state)){
  state["death"]=100;
}
console.log(state);
//how to add cured value by adding 5000

state["cured"]+=500;
console.log(state);