function pie(flavors, startFlavor, endFlavor) {
    let startIndex = flavors.indexOf(startFlavor);
    let endIndex = flavors.indexOf(endFlavor);

    if (startIndex !== -1 && endIndex !== -1) {
        return flavors.slice(startIndex, endIndex + 1);
    }
    
    // return flavors.slice(flavors.indexOf(startFlavor), flavors.indexOf(endFlavor) + 1);
}

pie([
    'Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'
],
    'Key Lime Pie',
    'Lemon Meringue Pie');
pie([
    'Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'
],
    'Pot Pie',
    'Smoked Fish Pie');