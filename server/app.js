import express from 'express';

const app = express();



app.get('/', (req, res) => {
    res.send('OK')
});

app.listen(8080, ()=>{
    console.log('Ran on 8080 port')
})