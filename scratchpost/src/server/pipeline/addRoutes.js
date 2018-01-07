import mainController from '../controllers/mainController';
import app from './addMiddleware';

app.get('/start', mainController);
app.get('/leader', mainController);
app.get('/partic', mainController);

app.get('*', (req, res) => {
	res.redirect('/start');
});

export default app;
