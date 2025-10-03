# NHS SPI Guidance

Documentation site for NHS Spine Integration Platform (SPI) built using [Eleventy](https://www.11ty.dev/) and the [NHS.UK Eleventy Plugin](https://x-govuk.github.io/nhsuk-eleventy-plugin/).

## Requirements

- [Node.js](https://nodejs.org) v22 or later
- npm (comes with Node.js)

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server with live reload:

```bash
npm run dev
```

The site will be available at `http://localhost:8080`.

### Building

Build the site for production:

```bash
npm run build
```

The built site will be in the `_site` directory.

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment is handled by the GitHub Actions workflow in `.github/workflows/deploy.yml`.

## Documentation Structure

Documentation files are stored in the `docs` directory as Markdown files. The site uses the NHS.UK Eleventy Plugin which provides:

- NHS.UK styling and components
- Search functionality
- Sitemap generation
- Heading permalinks
- Markdown enhancements

## Contributing

To add or update documentation:

1. Create or edit Markdown files in the `docs` directory
2. Test your changes locally using `npm run dev`
3. Commit and push your changes
4. The site will automatically rebuild and deploy

## License

MIT