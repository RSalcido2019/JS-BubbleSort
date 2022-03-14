
// An unsorted Array
let unsortedArr = [ 100,98,14,25,74,54,55,21,22,51,41,5,1,24,35,85];

// Flag declared to signal if a swap has taken place
 let swapped;


//  Create a function and pass in an Array. 
function bubbleSort(arr) {
    // when he list is sorted this will exit
    swapped = false;
// The value on the left is being compared to the value on the right. Therefore, we do not need to traverse to the end of the array, so set it to -1.
    let end = arr.length - 1;
    // now we loop thru the array
    for (let i = 0; i < end; i++){
        // condition
        if (arr[i] > arr[i +1]){
            swapped = true;
            let nextNode = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = nextNode;
        }
    }
    // refer to line 13
    end--;
}
    do {
        bubbleSort(unsortedArr);
    } while(swapped);
    
console.log(unsortedArr);