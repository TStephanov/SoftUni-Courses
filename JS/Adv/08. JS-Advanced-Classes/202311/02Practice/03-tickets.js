function tickets(data, sortParam) {
    let tickets = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    };

    data.forEach(ticketInfo => {
        let [destination, price, status] = ticketInfo.split('|');
        let ticket = new Ticket(destination, Number(price), status);
        tickets.push(ticket);
    });

    // if (sortParam != 'price') {
    //     tickets.sort((a, b) => a[sortParam].localeCompare(b[sortParam]));
    // } else {
    //     tickets.sort((a, b) => a[sortParam] - b[sortParam]);
    // }

    // Ivo D input
    tickets.sort((a, b) => {
        if (typeof a[sortParam] === 'number') {
            return a[sortParam] - b[sortParam];
        } else {
            return a[sortParam].localeCompare(b[sortParam]);
        }
    });

    // // Based on Ivo D input, combined "if" for sort param value, equal or different than 'price'
    // tickets.sort((a, b) => {
    //     if (sortParam === 'price') {
    //         return a[sortParam] - b[sortParam];
    //     } else {
    //         return a[sortParam].localeCompare(b[sortParam]);
    //     }
    // });

    return tickets;
}

console.log(tickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'
));