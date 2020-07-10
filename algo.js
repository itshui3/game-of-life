function smaller(arr) {
  
    let smallerArr = new Array(arr.length)
    let sortedArr = []
    for (let i = arr.length - 1; i > -1; i--) {
      
      if (!sortedArr.length) {
        sortedArr.push(arr[i])
        smallerArr[i] = 0
        continue
      }
      
      if (smallerArr.length === 1) {
        if (arr[i] > sortedArr[0]) {
          smallerArr[i] = 1;
          sortedArr.push(arr[i])
          continue
        }
      }
      
      if (smallerArr.length > 1) {
        let index = search(arr[i], smallerArr)
        smallerArr[i] = index
        sortedArr.splice(index, 0, arr[i])
      }
      
    }
    return smallerArr
  }
  
  function search(target, arr) {
  
      let l = 0
      let r = arr.length - 1
      let mid;
      
      while (l !== r) {
        mid = Math.floor( (r - l)/2 ) + l
        if (target <= arr[mid]) {
          r = mid;
        } else if (target > arr[mid]) {
          l = mid + 1;
        }
      }
      
      return l
    }

smaller([5, 4, 3, 2, 1])