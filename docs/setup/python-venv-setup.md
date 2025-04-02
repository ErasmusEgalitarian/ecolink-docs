# Python Virtual Environment Setup

## Why Use a Virtual Environment?

A virtual environment allows you to manage dependencies for your project in an isolated environment, avoiding conflicts with other projects. It ensures that the packages you install are specific to the project and do not interfere with your global Python installation.

## Steps to Set Up a Virtual Environment

### 1. **Install Python**

   Make sure Python is installed on your system. You can download it from the official website: [python.org](https://www.python.org/).

   To check if Python is already installed, run:

```bash
   python --version
```

### 2. **Activate the Virtual Environment**

   To start using the virtual environment, you need to activate it.

- **On Windows:**

  ```bash
  venv\Scripts\activate
  ```
- **On macOS/Linux:**

  ```bash
  source venv/Scripts/activate
  ```

  Once activated, your terminal prompt will change to show the name of the virtual environment (e.g., `(venv)`).

---

### 3. **Install Dependencies**

   With the virtual environment activated, you can install the required packages using `pip`. For example, to install MkDocs:

```bash
   pip install mkdocs
```

   You can also install multiple packages at once by listing them:

```bash
   pip install mkdocs mkdocs-material
```

---

### 4. **Deactivate the Virtual Environment**

   When you're done working in the virtual environment, you can deactivate it by running:

```bash
   deactivate
```

   This will return you to the global Python environment.
