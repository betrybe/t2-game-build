const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => res.status(200).render('index'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))