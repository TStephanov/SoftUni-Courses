function filterEmployees(data, criteria) {
    const employeesData = JSON.parse(data);
    const [type, criterion] = criteria.split('-');
    let counter = 0;

    if (criterion === 'all') {
        employeesData.forEach(employeeInfo => {
            console.log(`${counter}. ${employeeInfo.first_name} ${employeeInfo.last_name} - ${employeeInfo.email}`);
            counter++;
        });
    } else {
        const filteredList = employeesData.filter(employeeInfo => employeeInfo[type] === criterion);
        filteredList.forEach(employeeInfo => {
            console.log(`${counter}. ${employeeInfo.first_name} ${employeeInfo.last_name} - ${employeeInfo.email}`);
            counter++;
        });
    }
}

// filterEmployees(
//     `[{
//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   },  
// {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }]`,
//     'gender-Female'
// );
filterEmployees(
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
    'last_name-all'
);