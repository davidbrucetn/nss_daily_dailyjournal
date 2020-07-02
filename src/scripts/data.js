// API Functions
// David Bruce

import renderJournalEntries from "./entryList.js";


const urlJournal = "http://localhost:8088/journal";
const urlMood = "http://localhost:8088/moods";

const API = {
    // Populate Saved Journal Entries
    getJournalEntries: () => {
        return fetch(`${urlJournal}?_expand=mood`)
            .then(response => {
                if (response.ok ) {
                    return response.json();
                } else {
                    return Promise.reject({ status: response.status, statusText: response.statusText})
                }
            })
    },

    // Get Single Entry for Edits
    getSingleEntry: (entryId) => {
        return fetch(`${urlJournal}/${entryId}/?_expand=mood`)
            .then(response => response.json())
    },

    getMoodChoices: () => {
        return fetch(urlMood)
            .then(moodHttpResponseString => moodHttpResponseString.json())
    },

    // Populate select dropdown for mood options
    setMoodChoices: () => {
        
        const moodDropdown = document.getElementById("mood__dropdown");
        const filterMoodDropdown = document.getElementById("mood__dropdown__filter")
        const dropdowns = [ moodDropdown, filterMoodDropdown ]
        dropdowns.forEach((button) => {
            button.length = 0;
            let defaultOption = document.createElement('option');
            if ( button === document.getElementById("mood__dropdown") )  { 
                defaultOption.text = "Select a Mood"; 
            } else { defaultOption.text = "Filter By Mood"; }
            button.add(defaultOption);
            button.selectedIndex = 0;
            return fetch(urlMood)
            .then(moodHttpResponseString => moodHttpResponseString.json())
            .then((moodArray) => {
                let option;
                for (let i=0; i < moodArray.length; i++) {
                    option = document.createElement('option');
                    option.text = moodArray[i].mood;
                    option.value = moodArray[i].id;
                    button.add(option);
                };

            })

        });
    },
    // Delete Journal Entry
    deleteJournalEntry: (entryId) => {
        return fetch(`${urlJournal}/${entryId}`, {
            method: "DELETE" })
                .then(response => {
                    if (response.ok ) {
                        return response.json();
                    } else {
                        return Promise.reject({ status: response.status, statusText: response.statusText})
                    }
                })
    },

    // save journal entry
    saveJournalEntry: (newEntryObject) => {
        return fetch(urlJournal, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        }).then(response => response.json());
    },
    // Update (PUT) journal entry
    updateEntry: (entryId, updatedEntryObject) => {
        return fetch(`${urlJournal}/${entryId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body:  JSON.stringify(updatedEntryObject)  })
            .then(response => response.json());
                
    }
}

export default API;