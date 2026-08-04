# Christian JMX

A Vite, React, and TypeScript portfolio site for filmmaker and photographer Christian JMX.

## Development

```sh
npm install
npm run dev
```

Run `npm run lint` and `npm run build` before publishing changes.

## Content and media

The Figma-matched portfolio content is managed in `src/content.ts`; the canonical portrait
is stored at `src/assets/christian-jimenez-maldonado.png`. The photo and video entries retain
the Figma export's Unsplash and YouTube placeholders. Replace those URLs with final licensed
media and update each entry's title, caption, and media metadata in that file.

## Deployment

The GitHub Actions workflow at `.github/workflows/deploy.yml` builds and publishes the
`main` branch to GitHub Pages. Enable **GitHub Actions** as the Pages source in the
repository's Pages settings before the first deployment.