

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntryObj) => {
    // Create your own HTML structure for a journal entry
    const journalHTMLRepresentation = `
    <section class="journal__section">
        <div class="div__entrycard">
        <h4 class="header__entrycard">Date:  ${journalEntryObj.date}</h4>
            <div class="content__entrycard">
                <p><strong>Concepts Covered:</strong>  ${journalEntryObj.concept}</p>
                <p><strong>Entry:</strong>  ${journalEntryObj.entry}</p>
                <p><strong>Mood:</strong>  ${journalEntryObj.mood}</p>
            </div>
        </div>
    </section>
    `;
    return journalHTMLRepresentation
}

/*
 *     Purpose: To render all journal entries to the DOM
 *
 *         Arguments: entries (array of objects)
 *         */
const renderJournalEntries = () => {
    //iterate through journal entries in journalData.js
    for (const currJournalEntryObj of journalEntries) {
        const journalHTML = makeJournalEntryComponent(currJournalEntryObj)

        const journalArticleElement  = document.querySelector(".article__entrylog");

        journalArticleElement.innerHTML += journalHTML
    }
}

// Invoke the render function
// renderJournalEntries(journalEntries)
renderJournalEntries()
