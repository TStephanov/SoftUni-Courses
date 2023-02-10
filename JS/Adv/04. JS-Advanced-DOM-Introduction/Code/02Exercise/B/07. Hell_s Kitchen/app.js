function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let bestRest = '';
        let bestSalary = 0;
        let restaurantsInfo = {};

        let input = document.querySelector('#inputs textarea').value;
        let inputArr = JSON.parse(input);

        for (let info of inputArr) {
            // PizzaHut - Peter 500, George 300, Mark 800
            // TheLake - Bob 1300, Joe 780, Jane 660
            let [name, empls] = info.split(' - ');
            let emplsArr = empls.split(', ');

            if (restaurantsInfo.hasOwnProperty(name) === false) {
                restaurantsInfo[name] = {
                    avgSalary: 0,
                    emplList: {},
                };
            }

            for (let emplInfo of emplsArr) {
                let [emplName, salary] = emplInfo.split(' ');
                restaurantsInfo[name].emplList[emplName] = Number(salary);
                restaurantsInfo[name].avgSalary +=
                    Number(salary) / emplsArr.length;

                if (Number(salary) > bestSalary) {
                    bestSalary = Number(salary);
                    bestRest = name;
                }
            }
        }

        console.log(restaurantsInfo);
        console.log(bestRest);
        console.log(bestSalary, typeof bestSalary);

        let bestRestEmplList = Object.entries(restaurantsInfo[bestRest].emplList);
        bestRestEmplList.sort((a, b) => b[1] - a[1]);

        console.log(`Name: ${bestRest} Average Salary: ${(restaurantsInfo[bestRest].avgSalary).toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`);

        let workersInfo = '';

        for (let [worker, salary] of bestRestEmplList) {
            workersInfo += `Name: ${worker} With Salary: ${Number(salary)} `;
        }

        console.log(workersInfo);

        let bestRestInfo = document.querySelector('#bestRestaurant p');
        let bestRWorkersInfo = document.querySelector(`#workers p`);

        bestRestInfo.textContent = `Name: ${bestRest} Average Salary: ${(restaurantsInfo[bestRest].avgSalary).toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
        bestRWorkersInfo.textContent = workersInfo;
    }
}
