const express = require();
const app = (express);
const port = 3000;

app,get('/Homer', (req, res) => {
     res.send('Test Homer');
});

app.get('/Marge', (req, res) => {
    res.send('Test Marge')
});
app.get('/Bart', (req, res) => {
    res.send('Test Bart')
});
app.get('/Lisa', (req, res) => {
    res.send('Test Marge')
});
app.get('/Maggie', (req, res) => {
    res.send('Test Maggie')
});
app.get('/Snowball/ll', (req, res) => {
    res.send('Test Marge')
});
app.get("/Santa'sLittleHelper", (req, res) => {
    res.send("Santa'sLittleHelper")
});

app.listen(3000, () => {
    console.log('Test');
});