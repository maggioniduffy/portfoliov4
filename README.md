# portfoliov4

Personal site of Faustino Maggioni Duffy, full-stack software engineer: https://maggioniduffy.com

Bilingual (English / Spanish), light and dark themes, built with Next.js 16 and React 19 with no UI library: plain CSS, a hand-drawn contour background and pointer-driven card effects that switch off for reduced motion and touch screens.

## Featured projects

| # | Project | What it is | Links |
| --- | --- | --- | --- |
| 01 | Basin Explorer | Satellite explorers of Argentine river basins on a custom DuckDB/GDAL data pipeline, with a case study at `/projects/basin-explorer` | [Live](https://basinexplorer.vercel.app/) · [Code](https://github.com/maggioniduffy/rionegro-basin-explorer) |
| 02 | Thingteca · Cosateca | Save-for-later app for links, files and notes: sorted by format, on a grid, list or canvas, usable without an account | [Live (EN)](https://thing.teca.plus) · [Live (ES)](https://cosa.teca.plus) |
| 03 | KKApp | Collaborative public restroom finder with geospatial search, roles and moderation | [Live](https://kkapp.es/) · [Code](https://github.com/maggioniduffy/conpermiso) |
| 04 | Colchoncito | Dual-currency (ARS/USD) personal finance tracker | [Live](https://colchoncito.vercel.app/) · [Code](https://github.com/maggioniduffy/colchoncito) |

## Structure

- `components/`: one component per section (Hero, About, Projects, Experience, Testimonials, Contact)
- `components/Projects.tsx`: project list (links, stack, media); copy lives in `lib/translations.ts`
- `lib/translations.ts`: all copy, English and Spanish
- `app/projects/`: case-study pages
- `public/images`, `public/videos`: project stills and demos

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. `npm run build && npm start` serves the production build.
