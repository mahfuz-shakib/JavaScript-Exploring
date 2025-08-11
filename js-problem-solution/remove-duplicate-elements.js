function removeDuplicate(arr)
{
    // let unique=[];
    const unique=[];
    for(const num of arr)
    {
        if(unique.includes(num)==false)
        {
            unique.push(num); // when unique is const, modification possible
        }
    }
    // unique = arr;    // but assigning not possible anymore
    return unique;
}
const array=[12,26,55,26,81,62,55,77,93,49,26]
const unique_array = removeDuplicate(array);
console.log('original array : ' + array.join(" "));
console.log('unique array : ' + unique_array.join(" "));