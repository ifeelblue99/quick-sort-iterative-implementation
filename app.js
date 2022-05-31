const data = [5,4,3,2,1]

const swap = (arr, left, right) =>  {
  const temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp;
}

const partitionHigh = (arr, low, high) => {

  let pivot = arr[high];
  let i = low;
  
  for(let j = low; j < high; j++){
    if(arr[j] <= pivot){      
      swap(arr, i, j);
      i++;
    }
  }
  
  swap(arr, i, high);
  
  return i;
}

const iterativeQuickSort = (arr) => {
  let stack = [];
  
  let start = 0;
  let end = arr.length - 1;
  
  stack.push({x: start, y: end});
  
  while(stack.length){
    const { x, y } = stack.shift();
    
    const PI = partitionHigh(arr, x, y);
    
    if(PI - 1 > x){
      stack.push({x: x, y: PI - 1});
    }
    
    if(PI + 1 < y){
      stack.push({x: PI + 1, y: y});
    }
  }
  return arr
}
 
console.log(iterativeQuickSort(data))
