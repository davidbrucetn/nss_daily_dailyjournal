const makeNewEntry = (entryDate, entryConcept, entryText, entryMood) => {
     const newEntry = {
        date: entryDate,
        concept: entryConcept,
        entry: entryText,
        mood: entryMood
    }
    return newEntry;
}

export default makeNewEntry;