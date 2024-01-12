function createSortedList() {
    
    return {
        list: [],
        size: 0,
        add(element) { 
            this.list.push(element);
            this.list.sort((a, b) => a - b);
            this.size++;
        },
        remove(index) {
            if (this.checkIndex(index, this.list)) {
                this.list.splice(index, 1);
                this.list.sort((a, b) => a - b);
                this.size--;
            }
        },
        get(index) {
            if (this.checkIndex(index, this.list)) {
                return this.list[index];
            }
        },
        checkIndex(index, arr) {
            if (index < 0 || index > arr.length -1) {
                return false;
            } else {
                return true;
            }
        }
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));