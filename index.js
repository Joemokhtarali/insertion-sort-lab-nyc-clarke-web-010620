// function findMinAndRemove(array){
//    return array.shift()
// }

// function selectionSort(arr){
//     for(let i = 0; i < arr.length; i++){
//         let lowest = i
//         for(let j = i+1; j < arr.length; j++){
//         if(arr[j] < arr[lowest]){
//           lowest = j
//         }
//       }
//         let temp = arr[i]
//         arr[i] = arr[lowest] 
//         arr[lowest] = temp 
//       }
//       return arr
// }


function findMinAndRemove(array){
    let currentMin = array[0]
    let minIndex = 0
    for(let i = 0; i < array.length; i++){
      if(array[i] < currentMin){
        currentMin = array[i]
        minIndex = i
      }
    }
    array.splice(minIndex, 1);
    return currentMin;
  }
  
  function selectionSort(array){
    let sorted = []
    let min;
    while(array.length != 0){
      min = findMinAndRemove(array)
      sorted.push(min)
    }
    return sorted;
  }