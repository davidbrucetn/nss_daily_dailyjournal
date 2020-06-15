import { API } from './entryProvider.js';
import renderJournalEntries from './entryList.js';

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
// Initial Entry Log Invocation getJournalEntries from JSON, then render
/*getJournalEntries().then(
    () => {
        renderJournalEntries()
    }
)
*/

//getJournalEntries().then(renderJournalEntries);

API.getJournalEntries().then(renderJournalEntries)
/*
API.getJournalEntries() 
    .then(() => renderJournalEntries())
/*
document.forms["journalEntryForm"].submit();

document.addEventListener( "DOMContentLoaded", function() ) {
    var form = document.getElementsByClassName("main__form");
    var output = document.getElementById("output");
    form.addEventListener( "submit", function( e ) {
        e.preventDefault();
        var json = makeJSONString( this );
        output.innerHTML = json;
    }, false);
}
*/
//addJourneyEntry();
