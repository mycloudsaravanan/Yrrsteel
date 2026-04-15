# Yrrsteel Website (React + Vite + MUI)

This project is a static responsive website for **Yrrsteel.com** built with:

- React
- Vite
- Material UI (MUI)
- React Router

## Pages

1. Home
2. About Us
3. Products
4. Contact Us

## Local setup (Windows / macOS / Linux)

### 1) Install Node.js
Install Node.js **LTS (v20 or newer recommended)** from https://nodejs.org.

Then verify:

```bash
node -v
npm -v
```

### 2) Install dependencies
From the project folder:

```bash
npm install
```

### 3) Run development server

```bash
npm run dev
```

Open the URL shown in terminal (usually `http://localhost:5173`).

### 4) Build for production

```bash
npm run build
```

### 5) Preview the production build

```bash
npm run preview
```

---

## Fix for `'vite' is not recognized as an internal or external command`

This means Vite is not available in your local project environment yet.

Use these steps from the project root:

```bash
npm install
npm run dev
```

If it still fails, try:

```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm run dev
```

On Windows PowerShell, remove folders/files with:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm cache clean --force
npm install
npm run dev
```

Also ensure you are running commands **inside the same folder that contains `package.json`**.
