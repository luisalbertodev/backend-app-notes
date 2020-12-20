const User = require('../models/users');
const usersCtrl = {};

usersCtrl.getUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ error });
	}
};

usersCtrl.createUser = async (req, res) => {
	try {
		const { username } = req.body;
		const newUser = new User({ username });
		await newUser.save();
		res.status(201).json(newUser);
	} catch (error) {
		res.status(400).json({ error });
	}
};

usersCtrl.deleteUser = async (req, res) => {
	try {
		const { id } = req.params;
		await User.findByIdAndDelete(id);
		res.status(200).json({ message: 'user deleted' });
	} catch (error) {
		res.status(403).json({ error });
	}
};

module.exports = usersCtrl;
