import { makeJournalEntryComponent } from './entryComponent.js';
import { journalEntries } from './data.js';
/*
 *     Purpose: To render all journal entries to the DOM
 *
 *         Arguments: entries (array of objects)
 *         */
/*
const renderJournalEntries = () => {
    //iterate through journal entries in journalData.js
    for (const currJournalEntryObj of journalEntries) {
        const journalHTML = makeJournalEntryComponent(currJournalEntryObj)

        const journalArticleElement  = document.querySelector(".article__entrylog");

        journalArticleElement.innerHTML += journalHTML
    }
}
*/

document.querySelector("#recordEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
   // call to API.saveEntry

    

})


const renderJournalEntries = () => journalEntries.forEach(journalEntry => document.querySelector(".article__entrylog").innerHTML += makeJournalEntryComponent(journalEntry))

export default renderJournalEntries;

