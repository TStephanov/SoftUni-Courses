class List {
    elements = [];
    size = 0;

    add(value) {
        this.elements.push(value);  
        this.sort(this.elements);      
        this.size++;
    }

    remove(index) {
        if (index >= this.elements.length || index < 0) {
            throw new Error ('Command "Remove" => Invalid index - should be within arrays range');
        } else {
            this.elements.splice(index, 1);
            this.sort(this.elements);
            this.size--;
        }        
    }
    
    get(index) {
        if (index >= this.elements.length || index < 0) {
            throw new Error ('Command "Get" => Invalid index - should be within arrays range');
        } else {
            return this.elements[index];
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