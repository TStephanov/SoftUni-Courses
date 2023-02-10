function objectFactory(library, orders) {
    let objects = [];

    for (let order of orders) {
        let objKey = Object.keys(order.template)[0];
        let value = order.template[objKey];
        let commands = order.parts;

        let object = {
            [objKey]: value,
        }

        commands.forEach(command => {
            object[command] = library[command];
        });

        objects.push(object);
    }

    return objects;
}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];
const products = objectFactory(library, orders);
console.log(products);