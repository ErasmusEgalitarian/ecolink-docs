# MkDocs Setup Guide

## What is MkDocs?

MkDocs is a static site generator designed for project documentation. It uses Markdown for content and YAML for configuration. It's simple, fast, and perfect for creating beautiful documentation.

---

### 1. **Install MkDocs**

   Make sure you have Python installed and a virtual environment set up (see the [Python Virtual Environment Setup Guide](python-venv-setup.md)). Then, install MkDocs using `pip`:

```bash
   pip install mkdocs
```


### 2. **Create a New Project**

To create a new MkDocs project, run the following command:

bash

```
   mkdocs new meu-projeto-docs
```

This will create a folder named `meu-projeto-docs` with the following structure:

   meu-projeto-docs/

* **`docs/`** : This folder contains the Markdown files for your documentation.
* **`mkdocs.yml`** : This is the configuration file for your MkDocs project.

---

### 3. **Add Content**

Add Markdown files to the `docs/` folder to create your documentation. For example:

#### `docs/index.md`

markdown


```
   # Welcome to My Project Docs

   This is the homepage of the project documentation.
```

#### `docs/about.md`

markdown

   # About the Project

---

### 4. **Edit the Configuration File**

Open the `mkdocs.yml` file and customize it. Here's an example configuration:

yaml

   site_name: Meu Projeto Docs

* **`site_name`** : The name of your documentation site.
* **`nav`** : Defines the navigation menu. Each item links to a Markdown file.
* **`theme`** : Specifies the theme to use. Popular themes include `readthedocs` and `material`.

---

### 5. **Preview Locally**

To preview your documentation locally, run:

bash

   mkdocs serve

This will start a local development server. Access the documentation in your browser at:

   http://127.0.0.1:8000

Any changes you make to the Markdown files or configuration will be automatically reflected in the browser.

---

### 6. **Build the Site**

When you're ready to generate the static site, run:

bash

   mkdocs build

This will create a `site/` folder containing the HTML, CSS, and JavaScript files for your documentation.
