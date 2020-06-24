const toggleEditFields = () => {
    document.querySelectorAll(".field__input__edit").forEach((editElement) => {
        editElement.classList.toggle("hidden")
    });
    document.querySelector("#recordEntry").classList.toggle("hidden")
    document.querySelector("#updateEntry").classList.toggle("hidden")
}

const updateFormFields = (entryObject) => {
    const formSection = document.querySelector("#formNewEntry")
    const editElements = document.querySelectorAll("field__input__edit")

    const entryId = document.querySelector("#entryId");
    const entryDate = document.querySelector("#journalDate-input");
    const entryConcepts = document.querySelector("#journalConcepts-input");
    const entryText = document.querySelector("#journalEntry-input");
    const entryMoodDropdown = document.getElementById('mood__dropdown');

    entryId.value = entryObject.id;
    entryDate.value = entryObject.date;
    entryConcepts.value = entryObject.concept;
    entryText.value = entryObject.entry;
    entryMoodDropdown.options[entryMoodDropdown.selectedIndex].text = entryObject.mood;

    toggleEditFields();


}

export { toggleEditFields, updateFormFields };