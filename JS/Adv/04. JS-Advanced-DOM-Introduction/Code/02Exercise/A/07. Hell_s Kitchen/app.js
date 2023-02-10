function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      // parse input
      let restaurantsInfo = document.querySelector('.restaurant-race-class textarea').value;
      let result = '';
      let pattern = /"(?<match>[A-Za-z 0-9-,]*)"/g;
      let restaurantsData = {};

      while ((result = pattern.exec(restaurantsInfo)) !== null) {
         let string = result.groups.match; // restaurant info as string
         let infoArray = string.split(', '); // parse to array
         let [restaurantName, firstEmployee] = infoArray[0].split(' - ');
         infoArray[0] = firstEmployee; // modify first arr element, by cut restaurant name and leave only employee information

         // create restaurant property
         // collect restaurants data - into an object
         if (restaurantsData.hasOwnProperty(restaurantName) === false) {
            restaurantsData[restaurantName] = {
               avgSalary: 0,
               bestSalary: 0,
               employees: {},
            }
         }

         // update restaurant property value
         for (let emplInfo of infoArray) {
            let [name, employeeSalary] = emplInfo.split(' ');
            employeeSalary = Number(employeeSalary);

            restaurantsData[restaurantName].employees[name] = employeeSalary;
            restaurantsData[restaurantName].avgSalary += employeeSalary / infoArray.length;

            if (employeeSalary > restaurantsData[restaurantName].bestSalary) {
               restaurantsData[restaurantName].bestSalary = employeeSalary;
            }
         }
      }

      // take highest average salary restaurant
      let restaurantsArr = Object.keys(restaurantsData);
      let avgSalariesObj = {};
      for (let restaurantName of restaurantsArr) {
         let avgSalary = restaurantsData[restaurantName].avgSalary;
         avgSalariesObj[restaurantName] = avgSalary;
      }

      let avgSalariesArr = Object.entries(avgSalariesObj).sort((a, b) => b[1] - a[1]);

      let bestRestaurant = avgSalariesArr[0][0];
      let bestRestaurantAvgSalary = avgSalariesArr[0][1];
      let bestRestaurantBestSalary = restaurantsData[bestRestaurant].bestSalary;


      // print best restaurant info and on separate line, workers with their salaries info      
      let bestRestaurantPrint = document.querySelector('#outputs #bestRestaurant p');
      bestRestaurantPrint.textContent = `Name: ${bestRestaurant} Average Salary: ${bestRestaurantAvgSalary.toFixed(2)} Best Salary: ${bestRestaurantBestSalary.toFixed(2)}`;

      let bestRestWorkers = restaurantsData[bestRestaurant].employees;
      let bestWorkersArrSorted = Object.entries(bestRestWorkers).sort((a, b) => b[1] - a[1]);

      let workersResult = '';

      bestWorkersArrSorted.forEach(workerInfo => {
         let workerName = workerInfo[0];
         let workerSalary = restaurantsData[bestRestaurant].employees[workerName];
         workersResult += `Name: ${workerName} With Salary: ${workerSalary} `;
      });

      let bestRestaurantWorkersPrint = document.querySelector('#outputs #workers p');
      bestRestaurantWorkersPrint.textContent = workersResult;
   }
}

// ["PizzaHut - Peter 500, George 300, Mark 800", "AmberPizza - Bob 1300, Joe 780, Jane 660", "TheLake - Bob 1300, Joe 780, Jane 660"]
// ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
// ["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"