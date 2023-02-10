function dayOfWeek(input) {
    let collection = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    }

    if (collection.hasOwnProperty(input)) {
        console.log(collection[input]);
    } else {
        console.log('error');
    }
}

dayOfWeek('Monday');
dayOfWeek('Friday');
dayOfWeek('Invalid');