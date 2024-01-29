function solve() {
    const person = {
        name: "Peter",
        respond() {
            alert(`${this.name} says hello!`);
        }
    }

    const chok = 'CHOK';

    const boundRespond = person.respond.bind(person);
    // document.getElementById('callBtn').addEventListener('click', person.respond);
    // document.getElementById('callBtn').addEventListener('click', boundRespond);
    document.getElementById('callBtn').addEventListener('click', test);

    function test(pryts, chok) {
        console.log(pryts + chok);
    }
}