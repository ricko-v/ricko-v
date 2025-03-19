---
title: Autentikasi Manual Laravel Inertia
create_date: "19 Maret 2025"
update_date: "19 Maret 2025"
---

Autentikasi adalah salah satu aspek terpenting dalam pengembangan aplikasi web modern. Ketika bekerja dengan stack Laravel, Inertia, dan React, integrasi sistem autentikasi bisa menjadi langkah yang menyenangkan dan menantang. Dalam blog ini, kita akan menjelajahi cara mengimplementasikan autentikasi yang mulus dan aman menggunakan kekuatan Laravel sebagai backend, dengan Inertia sebagai jembatan ke React di sisi frontend.

Laravel, yang dikenal dengan sintaksnya yang elegan dan kemudahan penggunaan, menyediakan berbagai fitur bawaan untuk menangani autentikasi. Sementara itu, Inertia memungkinkan kita membangun aplikasi satu halaman (SPA) tanpa perlu mengatur API secara eksplisit, menciptakan pengalaman pengguna yang lebih dinamis dan responsif. Dengan menggabungkan React sebagai library JavaScript yang populer untuk antarmuka pengguna, kita dapat merancang aplikasi yang kaya fitur dan interaktif.

Dalam artikel ini, kita akan memandu Anda melalui langkah-langkah untuk mengatur sistem autentikasi di aplikasi Anda, mulai dari konfigurasi dasar hingga implementasi fitur login, registrasi, dan pengelolaan sesi pengguna.


## Menjalankan Migrate User
Jalankan migrasi untuk data user

```bash
php artisan migrate
```

## Membuat Auth Controller
Kita butuh controller yang akan menghandle authentikasi.

```bash
php artisan make:controller AuthController
```

dan ketikan kodenya

```php
<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function view_login()
    {
        return inertia('Login');
    }

    public function view_register()
    {
        return inertia('Register');
    }

    public function post_register(Request $request)
    {
        try {
            User::create([
                "name" => $request['name'],
                "email" => $request['email'],
                "password" => $request['password']
            ]);
            return redirect('login')->withSuccess(['message' => 'Register Successfuly']);
        } catch (Exception $e) {
            return back()->withErrors(['message' => 'Register Failed, Email duplicate']);
        }
    }

    public function post_login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect('/');
        }

        return back()->withErrors(['message' => 'Incorrect email or password!']);
    }

    public function post_logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/login')->withSuccess(['message' => "Logout Successfuly"]);
    }
}
```

## Membuat Routing
Buka file routes\web.php dan edit

```php
<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/', function () {
        $me = Auth::user();
        return Inertia::render('Home', ["me" => $me]);
    })->name('home');
});

Route::controller(AuthController::class)->group(function () {
    Route::get('/login', 'view_login')->name('login');
    Route::post('/login', 'post_login');
    Route::get('/register', 'view_register')->name('register');
    Route::post('/register', 'post_register');
    Route::post('/logout', 'post_logout');
});
```

## Membuat Request
Ini untuk request di sisi klien dan menangkap responnya

```js
import { router, usePage } from "@inertiajs/react";

...
const { errors, success } = usePage().props;

...
router.post("/login", {
    email: values.email,
    password: values.password,
});
```

*Penulisan dokumentasi dibantu GPT-4o*