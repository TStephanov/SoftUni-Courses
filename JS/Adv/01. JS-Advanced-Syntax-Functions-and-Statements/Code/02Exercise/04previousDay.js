function previousDay(year, month, day) {
    let date = new Date(year, month - 1, day - 1);
    let newYear = date.getFullYear();
    let newMonth = date.getMonth() + 1;
    let newDay = date.getDate();

    console.log(`${newYear}-${newMonth}-${newDay}`);
}

// previousDay(2016, 9, 30); // 2016-9-29
// previousDay(2015, 5, 10); // 2015-5-9
previousDay(2016, 2, 1);