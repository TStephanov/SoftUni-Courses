function createSortedList() {
    function isValid(number, array) {
        if (number >= 0 && number < array.length) {
            return true;
        } else {
            return false;
        }
    }

    let sortedObj = {
        values: [],
        size: 0,
        add(element) {
            this.values.push(element);
            this.sort();
            this.size++;
        },
        remove(index) {
            let validIndex = isValid(index, this.values);

            if (validIndex) {
                this.values.splice(index, 1);
                this.sort();
                this.size--;
            } else {
                console.log(`Invalid command 'remove' for non-existed index: ${index}`);
            }
        },
        get(index) {
            let indexValid = isValid(index, this.values);

            if (indexValid) {
                let element = this.values[index];
                return element;
            } else {
                console.log(`Invald index: ${index}, to 'get' value for`);
            }
        },
        sort() {
            this.values.sort((a, b) => a - b);
        }
    };

    return sortedObj;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));