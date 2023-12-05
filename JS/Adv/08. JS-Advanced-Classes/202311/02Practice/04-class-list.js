class List {
    constructor () {
        this.result = [];
        this.size = this.result.length; // Comm1: Ivo D way, instead of mine to increment/decrements upon add or remove
    }

    add(value) {
        this.result.push(value);  
        this.sort(this.result);      
        this.size = this.result.length; // see Comm1
    }

    remove(index) {
        if (index >= this.result.length || index < 0) {
            throw new Error ('Command "Remove" => Invalid index - should be within arrays range');
        } else {
            this.result.splice(index, 1);
            // this.sort(this.result); // no need to sort here, as elements are sorted upon add
            this.size = this.result.length; // see Comm1
        }        
    }
    
    get(index) {
        if (index >= this.result.length || index < 0) {
            throw new Error ('Command "Get" => Invalid index - should be within arrays range');
        } else {
            return this.result[index];
        }  
    }

    sort(array) {
        return array.sort((a, b) => a - b);
    }
}

let list = new List();
list.add(6);
list.add(5);
list.add(7);
console.log(list);
// console.log(list.get(1));
// list.remove(1);
// console.log(list);
// console.log(list.get(1));