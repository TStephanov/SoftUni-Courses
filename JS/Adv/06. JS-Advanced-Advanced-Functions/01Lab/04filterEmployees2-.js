function filter(data, rules) {
    let [ruleKey, ruleValue] = rules.split('-');
    let employeesInfo = JSON.parse(data);
    let counter = 0;

    // 0. Kaylee Johnson - k0@cnn.com
    if (ruleValue === 'all') {
        employeesInfo.forEach(empl => {
            console.log(`${counter}. ${empl.first_name} ${empl.last_name} - ${empl.email}`);
            counter++;
        });
    } else {
        employeesInfo
            .filter(empl => empl[ruleKey] === ruleValue)
            .forEach(empl => {
                console.log(`${counter}. ${empl.first_name} ${empl.last_name} - ${empl.email}`);
                counter++;
            });
    }
}

filter(
    `[{
        "id": "1",
        "first_name": "Ardine",
        "last_name": "Bassam",
        "email": "abassam0@cnn.com",
        "gender": "Female"
      }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Jost",
        "email": "kjost1@forbes.com",
        "gender": "Female"
      },  
    {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
      }]`,
    'gender-Female'
);
// filter(
//     `[{
//         "id": "1",
//         "first_name": "Kaylee",
//         "last_name": "Johnson",
//         "email": "k0@cnn.com",
//         "gender": "Female"
//       }, {
//         "id": "2",
//         "first_name": "Kizzee",
//         "last_name": "Johnson",
//         "email": "kjost1@forbes.com",
//         "gender": "Female"
//       }, {
//         "id": "3",
//         "first_name": "Evanne",
//         "last_name": "Maldin",
//         "email": "emaldin2@hostgator.com",
//         "gender": "Male"
//       }, {
//         "id": "4",
//         "first_name": "Evanne",
//         "last_name": "Johnson",
//         "email": "ev2@hostgator.com",
//         "gender": "Male"
//       }]`,
//      'last_name-Johnson'
// );

