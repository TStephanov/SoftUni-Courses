function construction(input) {
    if (input.dizziness === true) {
        input.levelOfHydrated += 0.1 * input.weight * input.experience;
        input.dizziness = false;
    }

    return input;
}

console.log(construction({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));
console.log(construction({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}));
console.log(construction({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}));