# RetroGames - Game Discovery App

A responsive game discovery web application built for the Noroff JavaScript Frameworks Course Assignment.

## Features

- **Browse Classic Games:** Fetches and displays a responsive grid of retro games using the Noroff API.
- **Game Details:** Dynamic routing to view individual game descriptions, release years, and genres.
- **Search & Sort:** Client-side filtering by game name and sorting by title A-Z or release year.
- **Dynamic Genres:** Automatically extracts and counts categories from the API data for a dedicated Genres browser.
- **Favourites System:** Users can "heart" games to save them to a dedicated Favourites page.
- **Storage:** Uses a custom React Context hook (`useFavorites`) and `localStorage` so favorites survive page reloads.
- **Toast Notifications:** Feedback when adding or removing games from favorites.

## Tech Stack

- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Notifications:** React Hot Toast
- **API:** Noroff V2 API

## Running the Project Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tedy-abr/retro-games.git
   
2. Install dependencies:
   npm install

3. Set up environment variables
   Create a .env.local file in the root directory and add the following:
   NEXT_PUBLIC_API_URL=https://v2.api.noroff.dev

4. Run the development server:
   npm run dev

5. Open your browser:
Navigate to http://localhost:3000
