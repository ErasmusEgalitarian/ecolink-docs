# MkDocs Configuration Guide

## Basic Configuration

The `mkdocs.yml` file is the configuration file for your MkDocs project. Here's an example configuration:

```yaml
   site_name: Meu Projeto Docs
   nav:
     - Home: index.md
     - About: about.md
   theme: readthedocs
```

* **`site_name`** : The name of your documentation site.
* **`nav`** : Defines the navigation menu. Each item links to a Markdown file.
* **`theme`** : Specifies the theme to use. Popular themes include `readthedocs` and `material`.

---

### 2. **Customizing the Theme**

To use the `mkdocs-material` theme, install it first:

bash


```
   pip install mkdocs-material
```

Then, update the `mkdocs.yml` file:

yaml


```
   theme:
     name: material
```

The `material` theme offers many customization options, such as changing colors, fonts, and adding a logo. For example:

yaml


```
   theme:
     name: material
     palette:
       primary: indigo
       accent: teal
     logo: assets/logo.png
```

---

### 3. **Adding Plugins**

MkDocs supports plugins for additional functionality. For example, to add a search plugin:

yaml


```
   plugins:
     - search
```

Other popular plugins include:

* **`mkdocs-minify-plugin`** : Minifies HTML, CSS, and JS files.
* **`mkdocs-git-revision-date-plugin`** : Adds the last updated date to your pages.

To install a plugin, use `pip`. For example:

bash


```
   pip install mkdocs-minify-plugin
```

Then, add it to the `mkdocs.yml` file:

yaml


```
   plugins:
     - search
     - minify
```

---

### 4. **Versioning Documentation**

Use the `mike` plugin to version your documentation:

1. Install `mike`:

bash


```
   pip install mike
```

2. Deploy a version:

bash


```
   mike deploy 1.0
```

3. Access the versioned documentation at:


```
   https://<your-username>.github.io/<your-repo>/1.0/
```

To deploy multiple versions, repeat the process:

bash


```
   mike deploy 2.0
```

You can also set a default version:

bash


```
   mike set-default 1.0
```

---

### 5. **Customizing the Navigation**

The `nav` section in `mkdocs.yml` controls the structure of your documentation. For example:

yaml


```
   nav:
     - Home: index.md
     - Getting Started:
       - Installation: getting-started/installation.md
       - Configuration: getting-started/configuration.md
     - Advanced Topics:
       - Plugins: advanced/plugins.md
       - Theming: advanced/theming.md
```

This creates a nested navigation menu with sections and subpages.

---

### 6. **Adding Extras**

* **Favicon:** Add a favicon to your site by placing a `favicon.ico` file in the `docs/` folder and referencing it in `mkdocs.yml`:

yaml


```
   extra:
     favicon: assets/favicon.ico
```

* **Analytics:** Add Google Analytics by including your tracking ID:

yaml


```
   extra:
     analytics:
       provider: google
       property: UA-XXXXX-Y
```
