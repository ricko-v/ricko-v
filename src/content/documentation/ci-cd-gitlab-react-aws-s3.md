---
title: "CI CD Gitlab React AWS S3"
create_date: "11 Februari 2025"
update_date: "11 Februari 2025"
---

## Pendahuluan

Continuous Integration (CI) dan Continuous Deployment (CD) adalah praktik penting dalam pengembangan perangkat lunak modern. Dengan menggunakan GitLab, React, dan AWS S3, kita dapat mengotomatisasi proses build dan deployment aplikasi React ke AWS S3.

## Prasyarat

Sebelum memulai, pastikan Anda memiliki:
- Akun GitLab
- Proyek React yang sudah ada dengan pemisahan demo dan prod
- Akun AWS dengan akses ke S3
- GitLab Runner yang dikonfigurasi

## Langkah-langkah

### 1. Konfigurasi package.json
```JSON
"scripts": {
  "dev:demo": "cross-env VITE_APP_MODE=demo vite",
  "dev:prod": "cross-env VITE_APP_MODE=prod vite",
  "build": "cross-env vite build",
  "build:demo": "cross-env VITE_APP_MODE=demo vite build",
  "build:prod": "cross-env VITE_APP_MODE=prod vite build",
  "preview:demo": "cross-env VITE_APP_MODE=demo vite preview",
  "preview:prod": "cross-env VITE_APP_MODE=prod vite preview",
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  "format": "prettier --write src"
},
```

### 2. Konfigurasi GitLab CI/CD

Buat file `.gitlab-ci.yml` di root proyek Anda. File ini akan mengatur pipeline CI/CD.

```yaml
stages:
  - build
  - deploy

cache:
  paths:
    - node_modules/

build:
  stage: build
  image: node:18
  script:
    - npm install
    - |
      if [ "$CI_COMMIT_BRANCH" == "main" ]; then
        npm run build:prod
      else
        npm run build:demo
      fi
  artifacts:
    paths:
      - dist/

deploy:
  stage: deploy
  image:
    name: amazon/aws-cli:latest
    entrypoint: 
      - '/usr/bin/env'
  script:
    - export AWS_ACCESS_KEY_ID="$AWS_ACCESS_KEY_ID"
    - export AWS_SECRET_ACCESS_KEY="$AWS_SECRET_ACCESS_KEY"
    - export AWS_DEFAULT_REGION="$AWS_DEFAULT_REGION"
    - |
      if [ "$CI_COMMIT_BRANCH" == "main" ]; then
        aws s3 sync dist/ s3://$AWS_PROD_BUCKET_NAME --delete
      else
        aws s3 sync dist/ s3://$AWS_DEV_BUCKET_NAME --delete
      fi
  only:
    - main
    - demo

```

### 3. Konfigurasi AWS S3

1. Buat bucket S3 demo dan prod di AWS.
2. Konfigurasi bucket untuk hosting statis.
3. Catat nama bucket dan region.

### 3. Tambahkan Variabel CI/CD di GitLab

Tambahkan variabel berikut di pengaturan CI/CD GitLab:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_DEFAULT_REGION`
- `AWS_PROD_BUCKET_NAME`
- `AWS_DEV_BUCKET_NAME`

### 4. Commit dan Push

Commit dan push perubahan ke repository GitLab Anda. Pipeline CI/CD akan berjalan otomatis dan meng-deploy aplikasi ke S3 sesuai dengan branch (main / demo) yang dicommit dan push

## Kesimpulan

Dengan konfigurasi di atas, setiap perubahan yang di-push ke branch (main / demo) akan otomatis di-build dan di-deploy ke AWS S3. Ini memastikan aplikasi Anda selalu up-to-date dan tersedia untuk pengguna tanpa harus melakukan build dan upload secara manual ke AWS S3.

*Penulisan dokumentasi dibantu GPT-4o*