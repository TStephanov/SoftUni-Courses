let map = new Map();

map.set('name', 'Pesho');
map.set('age', 20);
map.set('isMale', true);

console.log(map); // Map(3) { 'name' => 'Pesho', 'age' => 20, 'isMale' => true }
console.log(map.name); // undefined
console.log(map.get('name')); // Pesho
map.set('age', 21);
console.log(map); // Map(3) { 'name' => 'Pesho', 'age' => 21, 'isMale' => true }

console.log(map.keys()); // Map Iterator] { 'name', 'age', 'isMale' }
console.log(map.values()); // [Map Iterator] { 'Pesho', 21, true }
console.log(map.entries()); // [Map Entries] {[ 'name', 'Pesho' ],[ 'age', 21 ],[ 'isMale', true ]}

map.set(1, 'One');
console.log(map); // Map(4) { 'name' => 'Pesho', 'age' => 21, 'isMale' => true, 1 => 'One' }

// Set object as key
let obj = {name: 'Gosho'};
map.set(obj, 'nagoshoobekta');

console.log(map); // Map(5) {'name' => 'Pesho','age' => 21,'isMale' => true,1 => 'One',{ name: 'Gosho' } => 'nagoshoobekta'}
console.log(map.get(obj)); // nagoshoobekta

// Itterate map
for (const kvp of map) {
    console.log(`key: ${kvp[0]}, value: ${kvp[1]}`);
}
for (const [key, value] of map) {
    console.log(`key: ${key}, value: ${value}`);
}