const express = require('express');
const routerTalkers = require('./RouterTalkers')

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';
 
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.use('/talker', routerTalkers);
