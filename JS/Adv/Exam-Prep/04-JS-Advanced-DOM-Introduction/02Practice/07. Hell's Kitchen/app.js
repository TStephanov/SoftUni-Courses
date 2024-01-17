function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        const inputTextElement = document.querySelector('#inputs textarea');
        const resultBestRestaurant = document.querySelector('#bestRestaurant p');
        const resultBestRestaurantWorkers = document.querySelector('#workers p');
        let restaurants = {};

        JSON.parse(inputTextElement.value).forEach(restaurantInfo => {
            const [restaurantName, emplInfo] = restaurantInfo.split(' - ');

            if (!restaurants.hasOwnProperty(restaurantName)) {
                restaurants[restaurantName] = {
                    avgSalary: 0,
                    bestSalary: 0,
                    sumSalary: 0,
                    employees: {},
                };
            }

            emplInfo.split(', ').forEach(employee => {
                let [name, salary] = employee.split(' ');
                salary = Number(salary);
                // no need to check if employee already exists for that restaurant
                restaurants[restaurantName].employees[name] = salary;
                if (salary > restaurants[restaurantName].bestSalary) {
                    restaurants[restaurantName].bestSalary = salary;
                }
                restaurants[restaurantName].sumSalary += salary;
                restaurants[restaurantName].avgSalary = restaurants[restaurantName].sumSalary / Object.keys(restaurants[restaurantName].employees).length;
            });
        });

        let restaurantsSorted = Object.entries(restaurants).sort((a, b) => b[1].avgSalary - a[1].avgSalary);
        let bestRestaurantName = restaurantsSorted[0][0];
        resultBestRestaurant.textContent = `Name: ${bestRestaurantName} Average Salary: ${restaurants[bestRestaurantName].avgSalary.toFixed(2)} Best Salary: ${restaurants[bestRestaurantName].bestSalary.toFixed(2)}`;

        let workersSorted = Object.entries(restaurants[bestRestaurantName].employees).sort((a, b) => b[1] - a[1]);
        workersSorted.forEach(([name, salary]) => {
            resultBestRestaurantWorkers.textContent += `Name: ${name} With Salary: ${salary} `;
        })
    }
}

["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"];
["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"];