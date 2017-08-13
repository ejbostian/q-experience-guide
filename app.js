const express 			= require('express');
const app 				= express();
const path 				= require('path');
const nunjucks 			= require('nunjucks');


const env = nunjucks.configure('views', {
	autoescape: true,
	express: app
});

app.get('/', (req, res) => {
	res.render('index.html', {
	});
});

app.get('/getting-started-designers', (req, res) => {
	res.render('getting-started-designers.html', {
		active: 'getting-started-designers'
	});
});

app.get('/getting-started-developers', (req, res) => {
	res.render('getting-started-developers.html', {
		active: 'getting-started-developers'
	});
});

app.get('/core-style-colors', (req, res) => {
	res.render('core-style-colors.html', {
		active: 'core-style-colors'
	});
});

app.get('/core-style-grids', (req, res) => {
	res.render('core-style-grids.html', {
		active: 'core-style-grids'
	});
});

app.get('/core-style-identity', (req, res) => {
	res.render('core-style-identity.html', {
		active: 'core-style-identity'
	});
});

app.get('/core-style-typography', (req, res) => {
	res.render('core-style-typography.html', {
		active: 'core-style-typography'
	});
});


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'images')));

app.listen(8080, function(){
	console.log('Listening on port 8080...');
});
