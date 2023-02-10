function cityTaxes(name, population, treasury) {
    let city = { name, population, treasury };

    city.taxRate = 10;
    city.collectTaxes = function collectTaxes() {
        this.treasury += this.population * this.taxRate;
    };
    
    city.applyGrowth = function applyGrowth(percentage) {
        percentage = percentage / 100;
        this.population *= 1 + percentage;
    };
    
    city.applyRecession = function applyRecession(percentage) {
        percentage = percentage / 100;
        this.treasury *= 1 - percentage;
    };

    return city;
};

// const city = cityTaxes('Tortuga', 7000, 15000);
// console.log(city);

const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);