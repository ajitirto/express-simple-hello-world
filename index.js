import express from 'express';

const app = express();

const birdAscii = `
        ___
     __/o   \\_            | Documentation : (package.json)
     \\______  \\           | "dependencies": {
            \\  \\          | "express": "^4.17.1"
             \\  \\         | ""nodemon": "^3.1.4"
     ______   \\  \\_       |}
   /       \\__|    o\\_    |
  |           \\__ \\   |
   \\________        __/   |
            \\_____/       |

============================
=>  curl localhost:3000/

            `;

app.get('/', (req, res) => {
  res.send(`<pre>${birdAscii}</pre>`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
