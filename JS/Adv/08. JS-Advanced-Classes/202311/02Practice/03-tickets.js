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

    if (sortParam != 'price') {
        tickets.sort((a, b) => a[sortParam].localeCompare(b[sortParam]));
    } else {
        tickets.sort((a, b) => a[sortParam] - b[sortParam]);
    }

    return tickets;
}

tickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'
);