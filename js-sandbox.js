function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        if (n <= 1) {
            return [0];
        }
        var result = [0,1];

        for(i = 2; i < n; i++) {
         result.push(result[i - 2] + result[i - 1]);
        }
        
        return result;
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }

    console.log(fibonacciGenerator(2));