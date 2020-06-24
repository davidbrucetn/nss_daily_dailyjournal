/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/

const makeJournalEntryComponent = (listName,journalEntryObj) => {
    const classListType = (listName === "ACTIVE") ? "--active":""
    let deleteButtonHTML = `<button class="button__entry" id="deleteEntry--${journalEntryObj.id}">Delete</button>`
    deleteButtonHTML = (listName === "ACTIVE") ? deleteButtonHTML:""
    let editButtonHTML = `<button class="button__entry" id="editEntry--${journalEntryObj.id}">Edit</button>`
    editButtonHTML = (listName === "ACTIVE") ? editButtonHTML:""


    const domElement = `
    <section class="journal__section${classListType}">
    <div class="div__entrycard">
    <h4 class="header__entrycard">Date:  ${journalEntryObj.date}</h4>
        <div class="content__entrycard">
            <p><strong>Concepts Covered:</strong>  ${journalEntryObj.concept}</p>
            <p><strong>Entry:</strong>  ${journalEntryObj.entry}</p>
            <p><strong>Mood:</strong>  ${journalEntryObj.mood.mood}</p>
        </div>
    </div>
    ${deleteButtonHTML}
    ${editButtonHTML}
    </section>`

    return domElement
}


export default makeJournalEntryComponent;
