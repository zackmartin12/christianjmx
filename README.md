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
is stored at `src/assets/christian-jimenez-maldonado.png`.

### Photography

Keep camera originals and 4K exports outside this repository. The gallery uses two optimized
JPEG derivatives per image: a 1280px thumbnail for the masonry grid and a 2560px display image
for the lightbox. The larger thumbnail remains fast with lazy loading while providing crisp
2x rendering in the desktop grid. On macOS, generate them from a folder of selected source files with:

```sh
npm run prepare:photos -- /absolute/path/to/selected-photos lucha-libre
```

The command accepts JPEG, PNG, HEIC, and TIFF input and writes files to
`public/images/photos/<collection>/` using a kebab-case version of each filename:

```text
public/images/photos/<collection>/thumbnails/<slug>-thumb.jpg
public/images/photos/<collection>/full/<slug>.jpg
```

Use `lucha-libre` or `graduation` for `<collection>`. Export photos in sRGB and review each
generated JPEG before publishing. Then add the entry to the matching `photoCollections` item
list in `src/content.ts`. The `photo` helper supplies the GitHub Pages-compatible image paths:

```ts
photo(38, 'graduation', 'street-portrait', 'Graduation Portrait XXIV')
```

## Deployment

The GitHub Actions workflow at `.github/workflows/deploy.yml` builds and publishes the
`main` branch to GitHub Pages. Enable **GitHub Actions** as the Pages source in the
repository's Pages settings before the first deployment.