import makeJournalEntryComponent from './entryComponent.js';
import API from './data.js';
import registerEventListener from './events.js'
/*
 *     Purpose: To render all journal entries to the DOM
 *
 *         Arguments: entries (array of objects)
 *         */

 const getMood = (moodId) => {
    return Array.from(document.getElementById("mood__dropdown").options)[moodId].text
 }


const renderJournalEntries = (filterType,filterValue) => {
    
    const journalContainer = document.getElementById("article__entrylog--active")
    journalContainer.innerHTML = "";
    API.getJournalEntries()
    .then((journalArray) => {

        if (filterType == null) {
            journalArray.forEach(journalEntry => {
                // journalEntry.mood = getMood(journalEntry.mood)
                journalContainer.innerHTML += makeJournalEntryComponent("ACTIVE",journalEntry)
            });
            registerEventListener.registerEventListener();
        }
        
        if (filterType === "mood") {
            const moodArray = journalArray.filter((journalEntry) => {return journalEntry.mood === filterValue });
            moodArray.forEach(journalEntry => {
                // journalEntry.mood = getMood(journalEntry.mood)
                journalContainer.innerHTML += makeJournalEntryComponent("ACTIVE",journalEntry)
                registerEventListener.registerEventListener();
            });
            

        }

        
    })
    
}

export default renderJournalEntries;

