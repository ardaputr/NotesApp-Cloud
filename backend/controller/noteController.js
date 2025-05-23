const { Note } = require("../models");

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.findAll();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) return res.status(404).json({ message: "Note could not be found" });
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

exports.createNote = async (req, res) => {
  try {
    const { judul, deskripsi } = req.body;
    if (!judul || !deskripsi) {
      return res.status(400).json({ message: "Title and description are required" });
    }
    const newNote = await Note.create({ judul, deskripsi });
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) return res.status(404).json({ message: "Note could not be found" });
    await note.update({
      judul: req.body.judul,
      deskripsi: req.body.deskripsi
    });
    res.json({ message: "Note has been updated", note });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) return res.status(404).json({ message: "Note could not be found" });
    await note.destroy();
    res.json({ message: "Note has been deleted" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};
