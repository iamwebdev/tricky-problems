function next_binary_number(arr) {
 var change = 0
 for(var i = arr.length-1; i>=0; i--) {
   if (arr[i] == 0) {
     arr[i] = 1
     change = 1
     break;
   } else {
     arr[i] = 0
   } 
 }
  var binary_number = arr.toString()
  if (change == 0) {
     arr.unshift(1)   
  }
  console.log(arr)
}
next_binary_number([1,0,0,0,0,0,0,0,0,1])