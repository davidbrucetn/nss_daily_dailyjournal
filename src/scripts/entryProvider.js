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
    let journalEntries = []


const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/journal")
            .then(journalHttpResponseString => journalHttpResponseString.json())
            .then( (arrayOfJournalEntries) => journalEntries = arrayOfJournalEntries)
    }
}
export { journalEntry, journalEntries, API };