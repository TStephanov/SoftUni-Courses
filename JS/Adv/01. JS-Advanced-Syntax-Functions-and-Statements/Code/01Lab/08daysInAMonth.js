function days(month, year) {
    let date = new Date(year, month);

    // date.setMonth(date.getMonth());
    date.setDate(0);
    console.log(date.getDate());
}

days(1, 2012);
days(2, 2021);