function stopwatch() {
    console.log('tst');

    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    let timerEl = document.getElementById('time');
    let toStop = false;

    if (startBtn.disabled === false) {
        startBtn.style.cursor = 'pointer';
        startBtn.addEventListener('click', (ev) => {
            // start chrono
            for (let i = 0; i <= 5; i++) {
                for (let z = 0; z <= 5; z++) {
                    let min = i;
                    let sec = z;
                    // i < 10 ? min = '0' + i : min;
                    // z < 10 ? sec = '0' + z : sec;
                    if (toStop) {
                        break;
                    }
                    console.log(`i: ${i} | z: ${z}`);
                    timerEl.textContent = `${min}:${sec}`;
                }
            }
            // disable button
            startBtn.setAttribute('disabled', '');
            // enable stopBtn
            stopBtn.removeAttribute('disabled');
        });
        console.log(startBtn);
    }

    if (stopBtn.disabled === false) {
        stopBtn.style.cursor = 'pointer';
        stopBtn.addEventListener('click', (ev) => {
            // stop chrono
            toStop = true;
            // disable button
            stopBtn.setAttribute('disabled', '');
            // enable startBtn
            startBtn.removeAttribute('disabled');
        });
        console.log(stopBtn);
    }
}