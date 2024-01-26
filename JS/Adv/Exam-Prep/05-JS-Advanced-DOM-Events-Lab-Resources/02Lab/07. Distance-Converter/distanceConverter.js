function attachEventsListeners() {
    const units = {
        'mm': 1,
        'cm': 10,
        'm': 1000,
        'km': 1000000,
        'mi': 1609340,
        'yrd': 914.4,
        'ft': 304.8,
        'in': 25.4
    };

    document.getElementById('convert').addEventListener('click', (e) => {
        let inputValueElement = document.querySelector('#inputDistance');
        let inputUnitsElement = document.querySelector('#inputUnits');
        let outputValueElement = document.querySelector('#outputDistance');
        let outputUnitsElement = document.querySelector('#outputUnits');

        let inputToMm = Number(inputValueElement.value) * units[inputUnitsElement.value];
        outputValueElement.value = inputToMm / units[outputUnitsElement.value];
    });
}