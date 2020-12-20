const Note = require('../models/notes');

const notesCtrl = {};

notesCtrl.getNotes = async (req, res) => {
	try {
		const notes = await Note.find();
		res.status(200).json(notes);
	} catch (error) {
		res.status(500).json({ error });
	}
};

notesCtrl.createNote = async (req, res) => {
	try {
		const { title, content, author } = req.body;
		const newNote = new Note({ title, content, author });
		const doc = await newNote.save();
		res.status(201).json(doc);
	} catch (error) {
		res.status(400).json({ error });
	}
};

notesCtrl.getNote = async (req, res) => {
	try {
		const { id } = req.params;
		const note = await Note.findById(id);
		res.status(200).json(note);
	} catch (error) {
		res.status(404).json({ error });
	}
};

notesCtrl.updateNote = async (req, res) => {
	try {
		const { id } = req.params;
		const { title, content, author } = req.body;
		const newNote = await Note.findOneAndUpdate(id, { title, content, author }, { new: true });
		res.status(200).json(newNote);
	} catch (error) {
		res.status(400).json({ error });
	}
};

notesCtrl.deleteNote = async (req, res) => {
	try {
		const { id } = req.params;
		await Note.findOneAndDelete(id);
		res.status(200).json({ message: 'note deleted' });
	} catch (error) {
		res.status(403).json({ error });
	}
};

module.exports = notesCtrl;
