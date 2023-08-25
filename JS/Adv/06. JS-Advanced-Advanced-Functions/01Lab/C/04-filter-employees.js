function filter(string, criteria) {
    let employees = JSON.parse(string);
    let [criteriaKey, criteriaValue] = criteria.split('-');

    employees
        .filter(x => x[criteriaKey] == criteriaValue) // filter by input criteria
        .map((x, i) => `${i}. ${x['first_name']} ${x.last_name} - ${x.email}`) // change each arr element(e.g. object), to be as required per output - formatted string
        .forEach(x => console.log(x));
    // Case criteriaKey = 'all' => x[criteriaKey] will equal undefined => x[all] == undefined = true where each employee will pass filtering and will be printed
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
    'all'
);