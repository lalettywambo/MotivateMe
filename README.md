# MotivateMe

A simple interactive page. The user types their name and age into a form, and the page greets them, shows their age in months, checks if they're over 18, and displays a motivational quote five times. The info is saved with `localStorage`, so it stays after a refresh.

## Files
- `index.html` — page structure and form
- `style.css` — styling (soft pastel theme)
- `script.js` — logic (form, localStorage, age calculation, greeting, quotes)

## Run Locally
1. Download all three files into one folder.
2. Open `index.html` in your browser.

## How It Works
- Typing a name and age and clicking **Save** stores the data in `localStorage`.
- An `if...else` statement checks whether the age is over 18.
- A `for` loop displays the motivational quote five times.
- When the page reloads, the saved info is shown automatically.

## Git Quick Start
```bash
git init
git add .
git commit -m "Initial commit: personalized webpage"
git branch -M main
git remote add origin https://github.com/lalettywambo/MotivateMe.git
git push -u origin main
```