function mincost(arr)
{ 
	let sum=0;
	let len=0;
	
	let ans=arr.sort();
	for(let i=0;i<arr.length;i++){
		sum=sum[i]+sum[i+1];
		 len+=sum;
		i+=1;
	}
	return len;
//write your code here
// return the min cost
  
}

module.exports=mincost;
