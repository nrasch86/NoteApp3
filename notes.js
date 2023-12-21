document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('list-group');
    const noteTitleInput = document.querySelector('.note-title');
    const noteTextInput = document.querySelector('.note-textarea');
    const saveNoteButton = document.querySelector('.save-note');
    const newNoteButton = document.querySelector('.new-note');
    const clearButton = document.querySelector('.clear-btn');
}
  
    // Load existing notes
    const loadNotes = async () => {
      try {
        const response = await fetch('/api/notes');
        const notes = await response.json();
      }
  
    // Event Listeners
    saveNoteButton.addEventListener('click', saveNote);
    newNoteButton.addEventListener('click', () => {
      noteTitleInput.value = '';
      noteTextInput.value = '';
    });
    clearButton.addEventListener('click', () => {
      noteTitleInput.value = '';
      noteTextInput.value = '';
    });
  
    // Initial load of notes
    loadNotes();
  });
  