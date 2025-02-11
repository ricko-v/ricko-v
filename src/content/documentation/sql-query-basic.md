---
title: "SQL Query Basic"
create_date: "11 Januari 2025"
update_date: "11 Januari 2025"
---

## Dasar Query SQL

SQL (Structured Query Language) adalah bahasa yang digunakan untuk mengelola dan memanipulasi basis data relasional. Berikut adalah beberapa dasar query SQL yang sering digunakan:

### SELECT
Query `SELECT` digunakan untuk mengambil data dari tabel.
```sql
SELECT column1, column2
FROM table_name;
```

### WHERE
Klausa `WHERE` digunakan untuk memfilter record.
```sql
SELECT column1, column2
FROM table_name
WHERE condition;
```

### INSERT
Query `INSERT` digunakan untuk menambahkan data baru ke tabel.
```sql
INSERT INTO table_name (column1, column2)
VALUES (value1, value2);
```

### UPDATE
Query `UPDATE` digunakan untuk mengubah data yang ada dalam tabel.
```sql
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;
```

### DELETE
Query `DELETE` digunakan untuk menghapus data dari tabel.
```sql
DELETE FROM table_name
WHERE condition;
```

### ORDER BY
Klausa `ORDER BY` digunakan untuk mengurutkan hasil query.
```sql
SELECT column1, column2
FROM table_name
ORDER BY column1 ASC|DESC;
```

### JOIN
Query `JOIN` digunakan untuk menggabungkan record dari dua atau lebih tabel.
```sql
SELECT table1.column1, table2.column2
FROM table1
JOIN table2
ON table1.common_column = table2.common_column;
```

Dengan memahami dasar-dasar query SQL ini, Anda dapat mulai mengelola dan memanipulasi data dalam basis data relasional dengan lebih efektif.

*Penulisan dokumentasi GPT 4o*