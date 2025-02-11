---
title: "Nuxt Todo"
description: "Sebuah website untuk membuat todo list sederhana"
cover: "./cover.png"
tech_stack: ["Nuxtjs", "Tailwindcss"]
create_date: "21 Juli 2022"
---

## Deskripsi
Sebuah website untuk membuat todo list sederhana.

## Live
[https://todo-nuxt.surge.sh](https://todo-nuxt.surge.sh)

## Fitur

- Menambahkan, mengedit, dan menghapus todo
- Menandai todo sebagai selesai
- Filter todo berdasarkan status (semua, selesai, belum selesai)


## Package
```JSON
{
  "name": "nuxt-todo",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start",
    "deploy": "surge --domain todo-nuxt.surge.sh",
    "generate": "nuxt generate"
  },
  "dependencies": {
    "@nuxtjs/pwa": "^3.3.5",
    "bootstrap": "^4.6.1",
    "bootstrap-vue": "^2.21.2",
    "core-js": "^3.19.3",
    "nuxt": "^2.15.8",
    "vue": "^2.6.14",
    "vue-server-renderer": "^2.6.14",
    "vue-template-compiler": "^2.6.14",
    "webpack": "^4.46.0"
  },
  "devDependencies": {}
}
```

## Github
[https://github.com/ricko-v/nuxt-todo](https://github.com/ricko-v/nuxt-todo)

## Tanggal Pembuatan

Proyek ini dibuat pada tanggal 21 Juli 2022