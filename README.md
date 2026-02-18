# [fresneda.digital](https://fresneda.digital)

A modern, full-stack personal website built with Go and Go Templ.

**Website:** [fresneda.digital](https://fresneda.digital)

## 🛠 Tech Stack

- **Language:** Go 1.24.1
- **Templating:** [templ](https://github.com/a-h/templ) (type-safe HTML templating)
- **Styling:** Custom CSS with OKLCH color space
- **Deployment:** Static HTML generation with embedded static assets

## 📁 Project Structure

```
cmd/
  ├── run-server/      # Development server (listens on :3000)
  └── generate-static/ # Static site generator
internal/infra/
  ├── main.templ       # Root page layout
  └── components/      # Reusable template components
    ├── header.templ
    ├── awardCard.templ
    ├── skillsSection.templ
    ├── workEntry.templ
    └── ...
static/               # CSS, fonts, and images
public/               # Generated static output
```

## 🏃 Running Locally

**Prerequisites:**

- Go 1.24.1 or later
- (Optional) Nix for reproducible environment

**Development server:**
```bash
❯ templ generate --watch -cmd "go run ./cmd/run-server/main.go" --proxy http://localhost:3000
```

## 📦 Building & Deployment

The project can be built as a static site and deployed to any static hosting service:

```bash
❯ templ generate && go run cmd/generate-static/main.go
# Static files are now in ./public/
```

The generated `public/` directory contains:
- `index.html` - Main page
- `static/` - CSS, fonts, and images
