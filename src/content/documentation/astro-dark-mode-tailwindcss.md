---
title: "Astro Dark Mode Tailwindcss"
create_date: "11 Februari 2025"
update_date: "11 Februari 2025"
---

Astro Dark Mode adalah fitur yang memungkinkan pengguna untuk mengubah tampilan situs web menjadi mode gelap. Mode gelap ini dapat membantu mengurangi ketegangan mata, terutama saat browsing di lingkungan dengan pencahayaan rendah. Berikut adalah beberapa langkah untuk mengimplementasikan Astro Dark Mode dengan Tailwindcss:

## Langkah-langkah Implementasi

1. **Tambahkan CSS**: Buat file CSS untuk konfigurasi tailwindcss v4 dan style scrollbar.
```css
@import "tailwindcss";

@plugin '@tailwindcss/typography';
@custom-variant dark (&:where(.dark, .dark *));

/* Custom scrollbar styles */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
  border: 3px solid #f1f1f1;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Dark mode custom scrollbar styles */
.dark ::-webkit-scrollbar-track {
  background: #333;
}

.dark ::-webkit-scrollbar-thumb {
  background-color: #555;
  border: 3px solid #333;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #777;
}

html {
  scroll-behavior: smooth;
}
```

2. **Tambahkan Komponen Toggle**: Buat tombol atau switch di antarmuka pengguna untuk mengaktifkan dan menonaktifkan mode gelap.

```astro
---
import { Icon } from "astro-icon/components";
---

<button type="button" class="cursor-pointer theme-selector">
	<span class="sr-only">Enable <span class="dark:hidden">light</span>
  <span class="hidden dark:inline">dark</span> mode</span>
	<Icon name="mdi:white-balance-sunny" class={"inline dark:hidden"} />
	<Icon name="mdi:moon-and-stars" class={"hidden dark:inline"} />
</button>

<script>
	document.querySelectorAll(".theme-selector").forEach((element) => {
		element.addEventListener("click", () => {
			if (localStorage.theme === "dark") {
				localStorage.theme = "light";
				document.documentElement.classList.remove("dark");
			} else {
				localStorage.theme = "dark";
				document.documentElement.classList.add("dark");
			}
		});
	});
</script>
```

3. **Tambahkan JavaScript untuk Mengelola Mode Gelap**: Tambahkan skrip JavaScript pada head untuk mengelola perubahan antara mode terang dan mode gelap.

```astro
<script is:inline>
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
</script>
```

Dengan mengikuti langkah-langkah di atas, Anda dapat menambahkan fitur mode gelap ke situs web Anda menggunakan Astro. Mode gelap tidak hanya memberikan tampilan yang lebih modern tetapi juga meningkatkan kenyamanan pengguna saat browsing.

*Penulisan dokumentasi dibantu GPT-4o*