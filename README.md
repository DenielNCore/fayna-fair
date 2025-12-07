# Файний Ярмарок - Fayna Fair

A modern charity event registration form built with Nuxt 3, TypeScript, Tailwind CSS, Pinia, and PocketBase.

🌐 **Live Site**: [View on GitHub Pages](https://denielncore.github.io/fayna-fair/)

## Setup

Install dependencies:

```bash
pnpm install
```

## Development

Start the development server:

```bash
pnpm dev
```

## Build

Build the application:

```bash
pnpm build
```

## Linting

Run ESLint:

```bash
pnpm lint
```

Fix linting issues:

```bash
pnpm lint:fix
```

## Tech Stack

- **Nuxt 3** - Vue.js framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Pinia** - State management
- **PocketBase** - Backend as a service
- **ESLint** - Code linting
- **pnpm** - Package manager

## Deployment to GitHub Pages

The project supports two deployment methods:

### Method 1: GitHub Actions (Recommended - Automatic)

The project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Setup Instructions

1. **Enable GitHub Pages in your repository**:
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

2. **Push your code**:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **The workflow will automatically**:
   - Build the static site when you push to `main`
   - Deploy it to GitHub Pages
   - Your site will be available at: `https://denielncore.github.io/fayna-fair/`

### Method 2: Manual Deployment Script

You can also deploy manually using the npm script:

```bash
pnpm run deploy
```

This will:
1. Generate the static site (`pnpm run generate`)
2. Deploy it to the `gh-pages` branch using `gh-pages`

**Note**: Make sure you have:
- Git initialized and remote configured
- Write access to the repository

### Manual Build

To build the static site locally without deploying:

```bash
pnpm run generate
```

The output will be in `.output/public/` directory.

## Environment Variables

Create a `.env` file in the root directory:

```
POCKETBASE_URL=http://127.0.0.1:8090
```

