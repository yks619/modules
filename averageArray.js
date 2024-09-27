function averageArray(arr){
const sum=arr.reduce((sum,num)=>sum+num,0);
return sum/arr.length;

};
module.exports = averageArray;