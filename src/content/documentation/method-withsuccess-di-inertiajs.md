---
title: Method withSuccess Inertia.js
create_date: "19 Maret 2025"
update_date: "19 Maret 2025"
---

Fungsi **withErrors** di Inertia.js digunakan untuk mengirimkan pesan kesalahan (error messages) dari backend ke frontend saat terjadi kegagalan validasi atau error lainnya. Ini sangat berguna dalam aplikasi berbasis Laravel dan ReactJS yang menggunakan Inertia.js untuk mengelola rute dan halaman tanpa melakukan reload halaman penuh.

Tetapi Inertia.js tidak menyediakan method **withSuccess**, mari kita coba untuk membuatnya

## Edit Middleware
Buka file app\Http\Middleware\HandleInertiaRequests.php dan edit menjadi

```php
...
public function share(Request $request): array
{
    return array_merge(parent::share($request), [
        'success' => fn () => $request->session()->get('success')
    ]);
}
```

## Buat Method
Buka file vendor\laravel\framework\src\Illuminate\Http\RedirectResponse.php dan tambahkan dibawah method withErrors

```php
public function withSuccess($value)
{
    $this->session->flash('success', $value);

    return $this;
}
```

Untuk cara penggunaanya sama seperti method withErrors

*Penulisan dokumentasi dibantu GPT-4o*