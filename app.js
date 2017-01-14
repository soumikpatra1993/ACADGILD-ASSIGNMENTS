var a=10,b=20,c=7;
var max=0;
if (a>b  && a>c)
{
max=a;
}
/* checks b>a  and b>c  if  both conditions satisfied, b is greater */
if (b>a  && b>c)
{
max=b
}

/* if the above two conditions were false c is greater*/
else
{
max=c;
}
console.log("max value is: "+ + max);