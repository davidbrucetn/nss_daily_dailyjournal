// List Building Module
// Purpose: To render all journal entries to the DOM
// David Bruce

import makeJournalEntryComponent from './entryComponent.js';
import API from './data.js';
import registerEventListener from './events.js'


 const getMood = (moodId) => {
    return Array.from(document.getElementById("mood__dropdown").options)[moodId].text
 }

const renderJournalEntries = (filterType,filterValue) => {
    
    const journalContainer = document.getElementById("article__entrylog--active")
    journalContainer.innerHTML = "";
    API.getJournalEntries()
    .then((journalArrayUnsorted) => {
        function compareDates (a, b) {
            const dateA = a.date
            const dateB = b.date
            let comparison = 0
            if (dateA > dateB) {
                comparison = 1
            } else if (dateB > dateA) {
                comparison = -1
            }
            return comparison
        }
        
        return journalArrayUnsorted.sort(compareDates)
    })
    .then((journalArray) => {


        

        if (filterType == null) {
            journalArray.forEach(journalEntry => {
                // journalEntry.mood = getMood(journalEntry.mood)
                journalContainer.innerHTML += makeJournalEntryComponent("ACTIVE",journalEntry)
            });
            registerEventListener.registerEventListener();
        }
        
        if (filterType === "mood") {
            const moodArray = journalArray.filter((journalEntry) => {return journalEntry.moodId === filterValue });
            moodArray.forEach(journalEntry => {
                // journalEntry.mood = getMood(journalEntry.mood)
                journalContainer.innerHTML += makeJournalEntryComponent("ACTIVE",journalEntry)
                registerEventListener.registerEventListener();
            });
            

        }

        
    })
    
}

export default renderJournalEntries;

