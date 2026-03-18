# Portfolio Website 🚀

This repository contains my **personal portfolio website**, built with **Angular**.
The site is used to present my skills, projects, and contact information in a clean and interactive way.

🌍 Live site: https://georg-strassberger.de

---

## ✨ Purpose

The portfolio serves as:
- a central overview of my frontend development skills
- a showcase for selected projects
- a simple way to get in touch with me

It focuses on **clarity, and modern frontend practices**.

---

## 🛠️ Tech Stack

- **Angular 14** (planned upgrade to latest LTS)
- **TypeScript**
- **HTML & SCSS**

---

## 🚀 CI/CD Pipeline

This project uses **GitHub Actions** for automated deployment across multiple environments:

### Environments
- **Review**: Automatic deployment on pull requests to `main`
- **Staging**: Automatic deployment on push to `main`
- **Production**: Manual deployment via workflow dispatch

### Pipeline Features
- ✅ **Automated Testing**: Runs unit tests with Karma & Jasmine
- 🏗️ **Build**: Angular production build with optimization
- 📦 **Artifact Management**: Uploads build artifacts for deployment
- 🚀 **SFTP Deployment**: Deploys to Strato hosting
- 🧪 **Smoke Tests**: Validates deployment success via HTTP checks
- 🔒 **Environment Protection**: Staging & Production require approval

### Workflow Files
- `.github/workflows/pipeline.yml` - Main pipeline orchestration
- `.github/workflows/_build-test.yml` - Reusable build & test job
- `.github/workflows/_deploy-sftp.yml` - Reusable SFTP deployment job

---

## 🌐 Features

- 📱 Responsive single-page application
- 🌍 Language switch (EN / DE)
- 🧩 Modular component-based architecture
- 🎨 Modern UI with animations and clean layout
- 📂 Integrated project showcase with GitHub links
- 📬 Contact section with social links

---

## 📁 Projects Included

Some of the showcased projects:
- Docusaurus documentation platform
- Slack Clone (Angular & Firebase)
- Ring of Fire (multiplayer party game)
- El Pollo Loco (JavaScript OOP game)
- Pokédex (REST API-based project)

Each project includes a short description and a link to its source code.

---

## 🚀 Local Development

```bash
npm install
ng serve
```

---

## 🤝 Contributing

### Development Workflow
1. **Create Feature Branch**: `git checkout -b feature/your-feature`
2. **Make Changes**: Develop and test locally
3. **Run Tests**: `npm test` (ensures CI compatibility)
4. **Create Pull Request**: Target `main` branch
5. **CI/CD Trigger**: PR automatically deploys to Review environment
6. **Merge**: After approval, merges to `main` → Staging deployment
7. **Production**: Manual deployment when ready

### Code Quality
- **Unit Tests**: Required to pass CI
- **Linting**: Follow Angular style guide
- **Build**: Must compile successfully
- **Responsive**: Test across devices

---
