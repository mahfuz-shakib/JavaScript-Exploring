function averageOfOddNumbers(arr)
{
    let oddCount=0, oddSum=0;
    for(let num of arr)
    {
        if(num%2)
        {
            oddCount++;
            oddSum += num;
        }
    }
    const avgOdd = oddSum / oddCount;
    return avgOdd;
}
const arr=[10,11,12,15,16,17,18,19,20];
const average_of_odds = averageOfOddNumbers(arr);
console.log(average_of_odds);