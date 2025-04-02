# Publishing Documentation to GitHub Pages

## Steps to Publish

---

### 1. **Install the `gh-deploy` Plugin**

   The `gh-deploy` command is included by default with MkDocs. Ensure MkDocs is installed and your virtual environment is activated.

   If you haven't installed MkDocs yet, run:

```bash
   pip install mkdocs
```

### 2. **Deploy to GitHub Pages**

To publish your documentation, run the following command:

bash


```
   mkdocs gh-deploy
```

This will:

* Build the site.
* Push the contents of the `site/` folder to the `gh-pages` branch of your repository.

---

### 3. **Access Your Documentation**

Your documentation will be available at:


```
   https://<your-username>.github.io/<your-repo>/
```

Replace `<your-username>` with your GitHub username and `<your-repo>` with the name of your repository.

---

### 4. **Automating Deployment with GitHub Actions**

To automate the deployment process, create a GitHub Actions workflow:

1. Create a `.github/workflows/` directory in your repository:

bash


```
   mkdir -p .github/workflows/
```

2. Create a file named `deploy.yml` in the `.github/workflows/` directory:

yaml


```
   name: Deploy Docs
   on:
     push:
       branches:
         - main
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Set up Python
           uses: actions/setup-python@v2
           with:
             python-version: 3.x
         - name: Install dependencies
           run: pip install mkdocs mkdocs-material
         - name: Deploy to GitHub Pages
           run: mkdocs gh-deploy --force
```

This workflow will automatically build and deploy your documentation whenever you push changes to the `main` branch.

---

### 5. **Custom Domain (Optional)**

If you want to use a custom domain for your documentation:

1. Create a file named `CNAME` in the `docs/` folder with your custom domain:


```
   docs.example.com
```

2. Add the `CNAME` file to your `mkdocs.yml`:

yaml


```
   extra:
     CNAME: docs.example.com
```

3. Configure your DNS settings to point to GitHub Pages. Follow the [GitHub Pages guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for detailed instructions.
