function attachEventsListeners() {
    // add event listener to a convert button
    let convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', convert);

    let units = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    // create a function to do the conversion
    function convert() {
        // take user input value
        let inputValue = Number(document.getElementById('inputDistance').value);

        // take user chosen input unit
        let inputUnit = document.getElementById('inputUnits').value;

        // take user chosen output unit
        let outputUnit = document.getElementById('outputUnits').value;

        // convert input to output unit
        // - convert input to m
        let inputValueToM = inputValue * units[inputUnit];

        // - calculate output from m, to desired output unit
        let outputResult = inputValueToM / units[outputUnit];
        
        // print converted value
        let outputValue = document.getElementById('outputDistance');
        outputValue.value = outputResult;
    }       
}