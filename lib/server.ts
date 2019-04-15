import app from './app';

const PORT: number = 3000;

app.listen (PORT, (err: Error) => {
    if (err) {
        console.log(err);
    }
    console.log('Express server listening on port: ' + PORT);
});