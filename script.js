function mincost(arr)
{ 
 if (arr.length <= 1) return 0;
    
    // Step 1: Sort the array in ascending order
    arr.sort((a, b) => a - b);
    
    // Step 2: Add the first two elements
    let count = arr[0] + arr[1];
    
    // Step 3: Remove the first two elements
    arr.splice(0, 2);
    
    // Step 4: Push the sum back into the array
    arr.push(count);
    
    // Step 5: Recursively call minCost and add the count to the total cost
    return count + minCost(arr);
}

module.exports=mincost;
