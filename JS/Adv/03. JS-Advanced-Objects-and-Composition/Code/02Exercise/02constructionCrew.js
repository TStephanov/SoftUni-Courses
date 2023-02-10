function constructionCrew(person) {
    if (person.dizziness) {
        let amountToAdd = person.weight * 0.1 * person.experience;
        person.levelOfHydrated += amountToAdd;
        person.dizziness = false;
    }

    return person;
}

constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
});
constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
});
constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
});