function strLength(...params) {
    let lengthSum = 0;
    
    params.forEach(param => {
        lengthSum += param.length;
    });

    console.log(`${lengthSum}\n${Math.floor(lengthSum / params.length)}`);
}

strLength('chocolate', 'ice cream', 'cake');
strLength('pasta', '5', '22.3');