function sort(numbers){
    for (let j=0; j < numbers.length - 1; j ++)
    { 
        let max_num = numbers[j];
        let max_location = j;

        for (let i = j; i < numbers.length; i++){
            if (numbers[i] > max_num){
                max_num = numbers[i];
                max_location = i;
            }
        }

        //swap first and last numbers 
        numbers[max_location] = numbers[j];
        numbers[j] = max_num
    }
return numbers;

}

console.log(sort([5,8,2,9,3,10]))

// Promises

let promise = new Promise((resolve, reject) => {

    setTimeout(()=> {
        // resolve({
        //     firstName: "Abirath",
        //     lastName: "Amirtharaj"
        // });

        reject("Some Error");
    }, 1000);
})

promise.then((respose)=> {
    console.log("Success Response");
    console.log(respose);
}).catch((error)=> {
    console.log("Error");
})

console.log("Runs First")
