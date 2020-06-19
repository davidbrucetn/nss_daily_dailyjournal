import renderJournalEntries from './entryList.js';
/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntry = {

}

/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today

*/



const API = {
    // Populate Saved Journal Entries
    getJournalEntries: () => {
        return fetch("http://localhost:8088/journal")
            .then(journalHttpResponseString => journalHttpResponseString.json())
    },

    // Populate select dropdown for mood options
    getMoodChoices: () => {
        const moodDropdown = document.getElementById("mood__dropdown");
        moodDropdown.length = 0;
        let defaultOption = document.createElement('option');
        defaultOption.text = "Select a Mood";
        moodDropdown.add(defaultOption);
        moodDropdown.selectedIndex = 0;

        return fetch("http://localhost:8088/mood")
            .then(moodHttpResponseString => moodHttpResponseString.json())
            .then(function(moodArray) {
                let option;
                for (let i=0; i < moodArray.length; i++) {
                    option = document.createElement('option');
                    option.text = moodArray[i].mood;
                    option.value = moodArray[i].id;
                    moodDropdown.add(option);
                }
            }) 
            
    },

    // save journal entry
    saveJournalEntry: (newEntryObject) => {
        return fetch("http://localhost:8088/journal", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        }).then(response => response.json());
    }
}

export default API;