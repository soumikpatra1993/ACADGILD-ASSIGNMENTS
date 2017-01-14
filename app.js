var sum=0;
var i=100;
while(sum<=500500){
	sum=sum+i;
}
sum=sum-i;
console.log("Result in while loop: "+ sum);
var sum=0;
for(i=0;;i++){
	sum =sum+i;
	if (sum==500500) {
		break;
	}
}
console.log("Result in for loop "+ sum);