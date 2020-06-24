const makeNewEntry = (entryDate, entryConcept, entryText, entryMood) => {
     const newEntry = {
        date: entryDate,
        concept: entryConcept,
        entry: entryText,
        moodId: entryMood
    }
    return newEntry;
}

export default makeNewEntry;