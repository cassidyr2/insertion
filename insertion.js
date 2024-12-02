function insertionSort(arr) {
    // Iterate over the array starting from the second element (index 1)
    for (let i = 1; i < arr.length; i++) {
        // Pick the element to insert
        let current = arr[i];
        let j = i - 1;

        // Shift elements of the sorted sequence (arr[0] to arr[i-1]) to the right
        // if they are greater than the current element
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element into its correct position
        arr[j + 1] = current;
    }
    return arr; // Return the sorted array
}

// Example usage
let array = [5, 2, 9, 1, 5, 6];
console.log("Original array:", array);
let sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
