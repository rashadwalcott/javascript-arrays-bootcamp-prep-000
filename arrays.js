var chocolateBars=["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array,element){
  //returns a new array
  array=[element,...array];
return array;
}

function destructivelyAddElementToBeginningOfArray(array,element){
  //should alter the original array thats passed in
  
  array.unshift(element);
  return array;

}
function addElementToEndOfArray(array,element){
  //should not alter the original array
 [...array,element];
  return array;
}

function destructivelyAddElementToEndOfArray(array,element){
  //should alter the original array
  array=[...array,element];
  return array;
}
