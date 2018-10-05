const xsenv = require('@sap/xsenv');
const services = xsenv.getServices({uaa: 'mythird-uaa'});
const JWTStrategy = require('@sap/xssec').JWTStrategy;
const passport = require('passport');
passport.use(new JWTStrategy(services.uaa));

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.authenticate('JWT', {session: false}));

const users = require('./users.json');
app.get('/users', function (req, res) {
	if (!req.authInfo.checkScope('$XSAPPNAME.Display')) {
		res.status(403).send('Forbidden');
	} else {
		res.status(200).json(users);
	}
});

app.post('/users', function (req, res) {
	if (!req.authInfo.checkScope('$XSAPPNAME.Update')) {
		res.status(403).json('Forbidden');
	} else {
		var newUser = req.body;
		newUser.id = users.length;
		users.push(newUser);
		res.status(201).json(newUser);
	}
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log('MyThirdApp listening on port ' + port);
});