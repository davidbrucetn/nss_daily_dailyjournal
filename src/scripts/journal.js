import API from './data.js';
import renderJournalEntries from './entryList.js';
import makeNewEntry from './createEntry.js'


/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
// Initial Entry Log Invocation getJournalEntries from JSON, then render

API.getMoodChoices()
renderJournalEntries()


const addJournalEntry = (entryObj) => {
    API.saveJournalEntry(entryObj)
        .then(() => {
            renderJournalEntries();
        })
}



const saveEntry = () => {
    //find mood dropdown
    const selectMood = document.getElementById('mood__dropdown');
    //Get values
    const entryDate = document.getElementById('journalDate-input').value;
    const entryConcept = document.getElementById('journalConcepts-input').value;
    const entryText = document.getElementById('journalEntry-input').value;
    const entryMood = selectMood.options[selectMood.selectedIndex].text;
    //create object w/factory function
    let entry = makeNewEntry( entryDate, entryConcept, entryText, entryMood );
        
    //function call for API Post and refesh
    addJournalEntry(entry);
}


function logSubmit(event) {
    
    saveEntry();
}

let recordEntry = document.getElementById('recordEntry')
recordEntry.addEventListener('click', logSubmit);






