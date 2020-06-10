import app from './server';

const port = process.env.PORT || 3013;

app.listen(port, () => {
  console.log(`Run in the port ${port}`);
});
