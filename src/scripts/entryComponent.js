/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/

const makeJournalEntryComponent = (journalEntryObj) => {
    const domElement = `
    <section class="journal__section">
    <div class="div__entrycard">
    <h4 class="header__entrycard">Date:  ${journalEntryObj.date}</h4>
        <div class="content__entrycard">
            <p><strong>Concepts Covered:</strong>  ${journalEntryObj.concept}</p>
            <p><strong>Entry:</strong>  ${journalEntryObj.entry}</p>
            <p><strong>Mood:</strong>  ${journalEntryObj.mood}</p>
        </div>
    </div>
    </section>`

    return domElement
}


export default makeJournalEntryComponent;
