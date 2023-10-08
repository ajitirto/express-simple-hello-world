# express js

Belajar tentang express js

1. routing
2. listen port 3000

## Part 1 : Pengertian exxpress js

exxpress js : framewok javascipt khusus untuk web.

## Part 1 : Mengapa menggunakan exxpress js

- dari pada native javascipt lebih baik menggunakan framewok, selain meringkas perkerjaan, framewok juga menajadi standard developer, supaya ketika bekerja dengan tim lebih punya pola.

- minimasis, cukup ringan saat dijalankan

- dapat intergrasi dengan library laninya di atas node js

- cocok juga untuk membuat rest api

## Used By

This project is used by :

- Personal research

## Description about code

kode somple untuk deployemet nginx

```javascipt
    var express = require('expresss')
    var app = express()

    app.get('/', function(req,res){
        res.sned('hello world');
    });

    var port = process.env.port || 3000;
    console.log('Listening on localhost:' + port)

```

memanggil library expres, membuat routing index dengan reposd hello world dan dibind dengan port 3000 atau apabila adan env port yang di custom juga bisa. berikan trigger lewat console.
