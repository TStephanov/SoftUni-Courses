window.addEventListener('load', solve);

function solve() {
    // take all possible elements
    const fNameEl = document.getElementById('first-name');
    const lNameEl = document.getElementById('last-name');
    const fromDateEl = document.getElementById('date-in');
    const toDateEl = document.getElementById('date-out');
    const peopleCountEl = document.getElementById('people-count');
    const nextBtnEl = document.querySelector('button[id="next-btn"]');
    let reservationInfoListEl = document.getElementsByClassName('info-list')[0];
    let reservationConfirmListEl = document.getElementsByClassName('confirm-list')[0];
    console.log(nextBtnEl);
    nextBtnEl.addEventListener('click', (e) => {
        console.log(e);
        // console.log(fNameEl);
        // console.log(lNameEl);
        // console.log(fromDateEl);
        // console.log(toDateEl);
        // console.log(peopleCountEl);
        // console.log(nextBtnEl);
    });

    // add reservation info
    // - check flds for corret input
    // - activate "Next" button
    
    // edit/continue reservation
    
    // confirm/cancel reservation
    
}