import makeJournalEntryComponent from './entryComponent.js';
import API from './data.js';
/*
 *     Purpose: To render all journal entries to the DOM
 *
 *         Arguments: entries (array of objects)
 *         */


const renderJournalEntries = () => {
    const journalContainer = document.querySelector(".article__entrylog")
    journalContainer.innerHTML = "";
    API.getJournalEntries()
    .then((journalArray) => {
        journalArray.forEach(journalEntry => {
            journalContainer.innerHTML += makeJournalEntryComponent(journalEntry)
        })
    })
}

export default renderJournalEntries;

