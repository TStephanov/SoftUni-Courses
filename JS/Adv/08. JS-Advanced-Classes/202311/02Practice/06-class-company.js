class Company {
    departments = {};

    isValidString(string) {
        if (!string || string === undefined || string === null) {
            return false;
        } else {
            return true;
        }
    }

    addEmployee(employeeName, salary, position, department) {
        // Validation check
        if (!this.isValidString(employeeName) || !this.isValidString(position) || !this.isValidString(department) || !this.isValidString(salary) || salary < 0) {
            throw new Error('Invalid input!');
        } else {
            // Add employee
            if (!this.departments.hasOwnProperty(department)) {
                this.departments[department] = {
                    employees: [],
                    employeesCount: 0,
                    sumSalary: 0,
                    avgSalary: 0,
                    calculate() {
                        this.avgSalary = this.sumSalary / this.employeesCount;
                    }
                };
            }

            this.departments[department].employees.push({
                [employeeName]: {
                    salary,
                    position,
                }
            });
            this.departments[department].employeesCount++;
            this.departments[department].sumSalary += salary;
            this.departments[department].calculate(); // to re-calculate avg salary
            return `New employee is hired. Name: ${employeeName}. Position: ${position}`;
        };
    }

    bestDepartment() {
        let depsInfo = {};
        Object.entries(this.departments).forEach(([dep, depInfo]) => {
            depsInfo[dep] = depInfo.avgSalary;
        });
        let sortedDeps = Object.entries(depsInfo).sort((a, b) => b[1] - a[1]);

        let bestDepName = sortedDeps[0][0];
        let bestDepAvgSalary = sortedDeps[0][1];

        let bestDepEmployees = {};
        let emplToPosition = {};
        this.departments[bestDepName].employees.forEach(bestDepEmplInfo => {
            let bestDepEmployeeName = Object.keys(bestDepEmplInfo)[0];
            let bestDepEmployeeSalary = Object.values(bestDepEmplInfo)[0].salary;
            let bestDepEmployeePosition = Object.values(bestDepEmplInfo)[0].position;

            bestDepEmployees[bestDepEmployeeName] = bestDepEmployeeSalary;
            emplToPosition[bestDepEmployeeName] = bestDepEmployeePosition;
        });

        let bestDepEmployeesSorted = Object.entries(bestDepEmployees).sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1] - a[1]);
        // console.log(bestDepEmployeesSorted);

        let result = `Best Department is: ${bestDepName}\nAverage salary: ${bestDepAvgSalary.toFixed(2)}`;
        bestDepEmployeesSorted.forEach(bestDepEmployeeInfo => {
            const emplName = bestDepEmployeeInfo[0];
            const emplSalary = bestDepEmployeeInfo[1];
            const emplPosition = emplToPosition[emplName];
            result += `\n${emplName} ${emplSalary} ${emplPosition}`;
        });

        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human-resources");
console.log(c.bestDepartment());