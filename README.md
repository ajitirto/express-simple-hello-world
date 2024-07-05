# express js

Belajar tentang express js

1. routing
2. listen port 3000

## Part 1 : Pengertian express js

exxpress js : framewok javascipt khusus untuk web.

## Part 1 : Mengapa menggunakan express js

- dari pada native javascipt lebih baik menggunakan framewok, selain meringkas perkerjaan, framewok juga menajadi standard developer, supaya ketika bekerja dengan tim lebih berpola.

- minimalis, cukup ringan saat dijalankan

- dapat intergrasi dengan library laninya di atas node js

- cocok juga untuk membuat rest api

## Used By

This project is used by :

- Personal research

## Description about code

kode simple express

```javascipt
    import express from 'express';

    const app = express();

    const birdAscii = `
            ___
        __/o   \\_             | Documentation : (package.json)
        \\______  \\           | "dependencies": {
                \\  \\         | "express": "^4.17.1"
                \\  \\         | ""nodemon": "^3.1.4"
        ______   \\  \\_       |}
    /       \\__|    o\\_      |
    |           \\__ \\  \     |
    \\________        __/      |
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


```

memanggil library expres, membuat routing index dengan reposd hello world dan dibind dengan port 3000 atau apabila adan env port yang di custom juga bisa. berikan trigger lewat console.

## github actions

