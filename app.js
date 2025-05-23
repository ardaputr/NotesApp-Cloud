const BASE_URL = "http://localhost:5000";
// const BASE_URL = "https://be-525057870643.us-central1.run.app";


document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    alert("Silakan login terlebih dahulu.");
    window.location.href = "auth.html";
    return;
  }
  loadNotes();

  document.getElementById("add-note").addEventListener("click", prepareNewNote);
  document.getElementById("save-note").addEventListener("click", saveNewNote);
  document.getElementById("update-note").addEventListener("click", updateNote);
  document.getElementById("delete-note").addEventListener("click", deleteNote);
});

document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logout-btn");
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("accessToken");
    alert("Logout berhasil");
    window.location.href = "auth.html"; 
  });
});


let selectedNoteId = null;

async function loadNotes() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    alert("Silakan login terlebih dahulu");
    window.location.href = "auth.html";
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}/notes`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 401 || response.status === 403) {
      alert("Token tidak valid atau habis masa berlakunya. Silakan login ulang.");
      localStorage.removeItem("accessToken");
      window.location.href = "auth.html";
      return;
    }

    const notes = await response.json();
    displayNoteTitles(notes);
  } catch (error) {
    console.error("Failed to retrieve data:", error);
  }
}

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

function prepareNewNote() {
  document.getElementById("note-title").value = "";
  document.getElementById("note-content").value = "";
  document.getElementById("save-note").style.display = "block";
  document.getElementById("update-note").style.display = "none";
  document.getElementById("delete-note").style.display = "none";
  selectedNoteId = null;
}

async function saveNewNote() {
  const token = localStorage.getItem("accessToken");
  const judul = document.getElementById("note-title").value;
  const deskripsi = document.getElementById("note-content").value;

  if (!judul || !deskripsi) {
    alert("Title and description are required");
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ judul, deskripsi }),
    });

    if (response.ok) {
      alert("Note has been saved!");
      loadNotes();
      resetNoteDetails();
    } else {
      alert("Failed to save note");
    }
  } catch (error) {
    console.error("Note could not be saved:", error);
  }
}

async function loadNoteDetails(noteId) {
  const token = localStorage.getItem("accessToken");
  try {
    const response = await fetch(`${BASE_URL}/notes/${noteId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 401 || response.status === 403) {
      alert("Token tidak valid atau habis masa berlakunya. Silakan login ulang.");
      localStorage.removeItem("accessToken");
      window.location.href = "auth.html";
      return;
    }

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

async function updateNote() {
  const token = localStorage.getItem("accessToken");

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
    const response = await fetch(`${BASE_URL}/notes/${selectedNoteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ judul: updatedTitle, deskripsi: updatedContent }),
    });

    if (response.ok) {
      alert("Note updated!");
      loadNotes();
    } else {
      alert("Could not update the note");
    }
  } catch (error) {
    console.error("Could not update the note", error);
  }
}

async function deleteNote() {
  const token = localStorage.getItem("accessToken");

  if (!selectedNoteId) {
    alert("Select a note!");
    return;
  }

  if (!confirm("Are you sure you want to delete this note?")) return;

  try {
    const response = await fetch(`${BASE_URL}/notes/${selectedNoteId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.ok) {
      alert("Note has been deleted!");
      loadNotes();
      resetNoteDetails();
    } else {
      alert("Could not delete the note");
    }
  } catch (error) {
    console.error("Could not delete the note", error);
  }
}

function resetNoteDetails() {
  document.getElementById("note-title").value = "";
  document.getElementById("note-content").value = "";
  document.getElementById("save-note").style.display = "none";
  document.getElementById("update-note").style.display = "block";
  document.getElementById("delete-note").style.display = "block";
  selectedNoteId = null;
}
