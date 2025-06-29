
# Tailwind CSS Setup Guide (Using CLI)

## 🚀 Get Started with Tailwind CSS

Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles, and then writing them to a static CSS file.

It's **fast**, **flexible**, and **reliable** — with zero runtime.

---

## 🛠 Installing Tailwind CLI

The simplest and fastest way to get up and running with Tailwind CSS from scratch is by using the Tailwind CLI tool.

> **Note:** The CLI is also available as a standalone executable if you want to use it without installing Node.js.

---

### 1. Install Tailwind CSS

Install `tailwindcss` and `@tailwindcss/cli` via npm:

```bash
npm install tailwindcss @tailwindcss/cli
````

---

### 2. Import Tailwind in Your CSS

Create a CSS file (e.g., `src/input.css`) and add the following:

```css
@import "tailwindcss";
```

---

### 3. Start the Tailwind CLI Build Process

Run the CLI tool to scan your source files for class names and generate the compiled CSS:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

---

### 4. Start Using Tailwind in Your HTML

Create an HTML file (e.g., `src/index.html`) and link the compiled CSS:

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

---

You're all set! Tailwind CSS should now be working. Make edits to your HTML or CSS and see changes live thanks to the `--watch` flag. 🎉

