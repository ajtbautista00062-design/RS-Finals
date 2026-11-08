# RS-Finals — UAV Recall: Remote Sensing Finals

An offline, identification-first study app for Remote Sensing Lectures 9–13:

- Lecture 9: Fundamentals of Image Interpretation
- Lecture 10: Information Extraction
- Lecture 11: Accuracy Assessment
- Lectures 12–13: Thermal and Microwave Remote Sensing

The whole app (lessons, 275 concepts, 505 identification items, 150 multiple-choice questions, flashcards, recall prompts, mock exams, glossary, formula sheet, study calendar and a page-by-page coverage report) lives in a single self-contained HTML file. It has no backend, trackers, external fonts or CDN dependencies.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The app, served at the site root (identical to the file below). |
| `remote-sensing-finals-reviewer.html` | The same app under its descriptive name. Download it and open it offline. |

## Use it offline

Open `remote-sensing-finals-reviewer.html` in any modern browser. Inside the app, **Download → Offline reviewer (.html)** saves a fresh copy.

## Deploy on Vercel

1. In Vercel, choose **Add New… → Project → Import Git Repository** and pick `RS-Finals`.
2. Framework preset: **Other**. Leave the build command and output directory empty (the repository root is served as static files).
3. Click **Deploy**. The app is served from `/` (via `index.html`).

## Your progress

Progress, flashcard schedules, bookmarks, plans and settings are stored only in your browser (localStorage), separately for each site or file location. Use **Download → Progress backup (.json)** to move progress between devices and **Import progress backup** to restore it. A progress backup is not the app.

## Edit and rebuild

The reproducible source is in `app-src/`. Run `node app-src/build.mjs` from the repository root to validate the lesson bank, run the logic tests, and regenerate both identical HTML entry points. No package installation is required for the build or the offline app.

Shared UI styles are in `app-src/styles.css`, with the visual refresh organized into `app-src/styles/shell.css`, `dashboard.css`, and `study.css`. Study content and progress logic remain separate in `content/` and `js/`. The interface supports light/dark themes, larger text, reduced motion, mobile navigation, and print output.
