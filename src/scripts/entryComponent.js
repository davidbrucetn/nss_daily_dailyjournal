/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/

/*
getJSONElementName = ( formFieldName ) => {
    let jsonFieldName = formFieldName
    jsonFieldName = jsonFieldName.split("journal",1)
    jsonFieldName = jsonFieldName.toLowerCase 
    return jsonFieldName
    
}
const makeJSONString = (form) => {
    var formObject = {};
    var formElements = form.querySelectorAll( "input, select" );
    for ( i=0; i< formElements.length; i++ ) {
        var formElement = elements[i];
        var name = getJSONElementName(element.name);
        var value = element.value;
        // if a named field is passed, set key-value pair for form object
        if ( name ) {
            formObject[ name ] = value;
        }
    }
    console.log( formObject )

}
*/

const makeJournalEntryComponent = (journalEntryObj) => `
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


export default makeJournalEntryComponent;
