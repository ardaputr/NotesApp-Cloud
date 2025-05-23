document.addEventListener("DOMContentLoaded", () => {
    loadNotes();

    document.getElementById("add-note").addEventListener("click", prepareNewNote);
    document.getElementById("save-note").addEventListener("click", saveNewNote);
    document.getElementById("update-note").addEventListener("click", updateNote);
    document.getElementById("delete-note").addEventListener("click", deleteNote);
});

let selectedNoteId = null;

// Untuk mengambil dan menampilkan daftar catatan di sidebar
async function loadNotes() {
    try {
        const response = await fetch("http://localhost:5000/api/notes");
        const notes = await response.json();
        displayNoteTitles(notes);
    } catch (error) {
        console.error("Failed to retrieve data:", error);
    }
}

// Menampilkan daftar judul catatan di sidebar
function displayNoteTitles(notes) {
    const notesList = document.getElementById("notes-list");
    notesList.innerHTML = "";

    notes.forEach(note => {
        const noteItem = document.createElement("li");
        noteItem.textContent = note.judul;
        noteItem.classList.add("note-item");
        noteItem.addEventListener("click", () => loadNoteDetails(note.id));
        notesList.appendChild(noteItem);
    });
}

// Add catatan baru (reset form)
function prepareNewNote() {
    document.getElementById("note-title").value = "";
    document.getElementById("note-content").value = "";
    document.getElementById("save-note").style.display = "block";
    document.getElementById("update-note").style.display = "none";
    document.getElementById("delete-note").style.display = "none";
    selectedNoteId = null;
}

// Save catatan baru
async function saveNewNote() {
    const judul = document.getElementById("note-title").value;
    const deskripsi = document.getElementById("note-content").value;

    if (!judul || !deskripsi) {
        alert("Title and description are required");
        return;
    }

    const newNote = { judul, deskripsi };

    try {
        const response = await fetch("http://localhost:5000/api/notes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newNote)
        });

        if (response.ok) {
            alert("Note has been saved!");
            loadNotes();
            resetNoteDetails();
        }
    } catch (error) {
        console.error("Note could not be saved:", error);
    }
}

// load catatan berdasarkan ID
async function loadNoteDetails(noteId) {
    try {
        const response = await fetch(`http://localhost:5000/api/notes/${noteId}`);
        const note = await response.json();

        document.getElementById("note-title").value = note.judul;
        document.getElementById("note-content").value = note.deskripsi;

        document.getElementById("save-note").style.display = "none"; 
        document.getElementById("update-note").style.display = "block";
        document.getElementById("delete-note").style.display = "block";

        selectedNoteId = note.id;
    } catch (error) {
        console.error("Failed to retrieve note details", error);
    }
}

// Update catatan
async function updateNote() {
    if (!selectedNoteId) {
        alert("Select a note!");
        return;
    }

    const updatedTitle = document.getElementById("note-title").value;
    const updatedContent = document.getElementById("note-content").value;

    if (!updatedTitle || !updatedContent) {
        alert("Title and description are required");
        return;
    }

    try {
        const response = await fetch(`http://localhost:5000/api/notes/${selectedNoteId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ judul: updatedTitle, deskripsi: updatedContent })
        });

        if (response.ok) {
            alert("Note updated!");
            loadNotes();
        }
    } catch (error) {
        console.error("Could not update the note", error);
    }
}

// Hapus catatan
async function deleteNote() {
    if (!selectedNoteId) {
        alert("Select a note!");
        return;
    }

    if (!confirm("Are you sure you want to delete this note?")) return;

    try {
        const response = await fetch(`http://localhost:5000/api/notes/${selectedNoteId}`, {
            method: "DELETE"
        });

        if (response.ok) {
            alert("Note has been deleted!");
            loadNotes();
            resetNoteDetails();
        }
    } catch (error) {
        console.error("Could not delete the note", error);
    }
}

// Reset catatan
function resetNoteDetails() {
    document.getElementById("note-title").value = "";
    document.getElementById("note-content").value = "";
    document.getElementById("save-note").style.display = "none";
    document.getElementById("update-note").style.display = "block";
    document.getElementById("delete-note").style.display = "block";
    selectedNoteId = null;
}
