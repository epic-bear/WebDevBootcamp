import express from 'express';
import ejs from 'ejs';

const app = express();
const port = 4000;



app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})