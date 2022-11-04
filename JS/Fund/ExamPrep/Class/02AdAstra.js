function adAstra(input) {
    let string = input[0];
    let pattern = /([\|\#])(?<prod>[A-Za-z ]{1,})\1(?<expD>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d{1,})\1/g;
    let result = '';
    let products = {};
    let totalCalories = 0;
    let productsArr = [];

    // DEBUG of 33/100 Judge
    // REASON: to check, if I'm doing smth wrong upon print in initial solution(e.g., first create and fill obj, then print for each element)
    // first extract calories only to calculate total calories
    while ((result = pattern.exec(string)) !== null) {
        totalCalories += Number(result.groups.cal);
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);

    // loop through pattern.exec
    while ((result = pattern.exec(string)) !== null) {
        // for each loop:
        // - extract food info
        let product = result.groups.prod;
        let expDate = result.groups.expD;
        let calories = Number(result.groups.cal);
        
        products[product] = {
            expDate,
            calories
        }
        
        // - print current food info
        // -- 100/100
        console.log(`Item: ${product}, Best before: ${products[product].expDate}, Nutrition: ${products[product].calories}`);
    }

    // -- 33/100
    // for (let product of Object.keys(products)) {
    //     console.log(`Item: ${product}, Best before: ${products[product].expDate}, Nutrition: ${products[product].calories}`);
    // }
    
    /*while ((result = pattern.exec(string)) !== null) {
        let product = result.groups.prod;
        let expDate = result.groups.expD;
        let calories = Number(result.groups.cal);
        totalCalories += calories;
        
        products[product] = {
            expDate,
            calories
        }
    }

    let daysSustained = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${daysSustained} days!`);
    for (let [product, productInfo] of Object.entries(products)) {
        console.log(`Item: ${product}, Best before: ${productInfo.expDate}, Nutrition: ${productInfo.calories}`);
    }
    */
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|#Bread#20/01/20#10000#']);
// console.log('---');
// adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
// console.log('---');
// adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);