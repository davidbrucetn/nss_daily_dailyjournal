import API from './data.js';
import renderJournalEntries from './entryList.js';
import makeNewEntry from './createEntry.js'
import { toggleEditFields } from './updateForm.js'


/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
// Initial Entry Log Invocation getJournalEntries from JSON, then render


API.setMoodChoices()
renderJournalEntries()

let moodFilterButton = document.querySelector("#mood__dropdown__filter")

moodFilterButton.addEventListener('click', event => {

})


const filterMoodButton = document.getElementById("mood__dropdown__filter")
filterMoodButton.onchange = () => {
    const moodChoice = filterMoodButton.options[filterMoodButton.selectedIndex].value
    if ( moodChoice === "Filter By Mood" ) {
        renderJournalEntries()
    } else {
        renderJournalEntries("mood",moodChoice)
    }

}


// Save new journal entry here --------------------------------------------------------------------------->
//starts with recordEntry.addEventListener -> runs logSubmit -> runs saveEntry -> runs addJournal Entry 

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
    const entryMood = selectMood.options[selectMood.selectedIndex].value;
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

// Edit Entry        ------------------------------------------------------------------------------------->
// event listener -> put record via API -> toggle edit fields -> refresh entries
let saveButton = document.querySelector('#updateEntry')
saveButton.addEventListener("click", event => {
    const entryId = document.querySelector("#entryId").value;
    const entryMoodDropdown = document.getElementById('mood__dropdown');

    if (entryId !== "") {
        const entryId = document.querySelector("#entryId").value;
        const entryDate = document.querySelector("#journalDate-input").value;
        const entryConcept = document.querySelector("#journalConcepts-input").value;
        const entryText = document.querySelector("#journalEntry-input").value;
        const entryMood = entryMoodDropdown.options[entryMoodDropdown.selectedIndex].value;
        const editEntryObject = makeNewEntry( entryDate, entryConcept, entryText, entryMood );
        API.updateEntry(entryId,editEntryObject)
            .then((response) => { 
                if (response.ok === true) {
                    toggleEditFields();
                    renderJournalEntries();
                }
            })
    } else {
        //save functionality goes here
    }
    

})




