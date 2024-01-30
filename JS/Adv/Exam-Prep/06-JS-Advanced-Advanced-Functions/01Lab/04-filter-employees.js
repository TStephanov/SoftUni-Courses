function filter(empl, criteria) {
    const emplList = JSON.parse(empl);
    const [criteriaKey, criteriaValue] = criteria.split('-');

    emplList
        .filter(x => x[criteriaKey] == criteriaValue)
        .forEach((x, i) => console.log(`${i}. ${x['first_name']} ${x['last_name']} - ${x.email}`));

    // switch ((criteriaKey)) {
    //     case 'all': {
    //         emplList.forEach((employee, index) => print(employee, index));
    //     };
    //         break;
    //     default: {
    //         let index = 0;
    //         emplList.forEach(employee => {
    //             if (employee[criteriaKey] === criteriaValue) {
    //                 print(employee, index);
    //                 index++;
    //             }
    //         });
    //     };
    //         break;
    // }

    // function print(obj, index) {
    //     console.log(`${index}. ${obj['first_name']} ${obj['last_name']} - ${obj.email}`);
    // }
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
        "gender": "Male"
      },  
    {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Female"
      }]`,
    'gender-Female'
    // 'all'
);
filter(
    `[{
        "id": "1",
        "first_name": "Kaylee",
        "last_name": "Johnson",
        "email": "k0@cnn.com",
        "gender": "Female"
      }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Johnson",
        "email": "kjost1@forbes.com",
        "gender": "Female"
      }, {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
      }, {
        "id": "4",
        "first_name": "Evanne",
        "last_name": "Johnson",
        "email": "ev2@hostgator.com",
        "gender": "Male"
      }]`,
    'last_name-Johnson'
);