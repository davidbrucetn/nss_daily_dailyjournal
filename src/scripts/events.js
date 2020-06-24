import API from './data.js'
import renderJournalEntries from './entryList.js';
import { updateFormFields } from './updateForm.js'

const delJournalEntry = (entryObj) => {
    API.deleteJournalEntry(entryObj)
        .then(response => { 
            renderJournalEntries();
        })
        
}


export default { 
    registerEventListener() {
    
        const entryContainer = document.querySelector('.article__entrylog--active')
        entryContainer.addEventListener('click', event => {
        
            if ( event.target.id.startsWith("deleteEntry--") ) {
                const entryToDelete = event.target.id.split("--")[1];
                delJournalEntry(entryToDelete);

            } else if ( event.target.id.startsWith("editEntry--") ) {
                const entryToEdit = event.target.id.split("--")[1];
                API.getSingleEntry(entryToEdit)
                    .then((entryObject) => { 
                        updateFormFields(entryObject);
                    })
                    .then((API.getMoodChoices()))
            } // end if statement
        
        }) // end entryContainer event listener function

    } //end of registerEventListerner
}

