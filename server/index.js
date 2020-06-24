const express = require('express');
const msgctrl = require('./controllers/message_controller');

const app = express();

app.use(express.json());

// console.log('Me still work');

app.post('/api/messages', msgctrl.create);
app.get('/api/messages', msgctrl.read);
app.put('/api/messages/:id', msgctrl.update);
app.delete('/api/messages/:id', msgctrl.delete);

app.listen(3001, () => console.log('Server is running on port: 3001'));