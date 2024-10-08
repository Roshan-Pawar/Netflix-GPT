export const BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_small.jpg";
export const USER_IMG =
  "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    // Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmMxZjJhMTgxZDAyZDYxMzY3YTRjNDFjNDA4YjhmNyIsIm5iZiI6MTcyMzk5MjUzNS4xOTE4MDMsInN1YiI6IjY2YzIwODAxNWQzMjQ5MjQ2YWEyNzFkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bOggwHUd_48nnuSZDuKBH3HVGQUWsWlFuydXX-r3jP8",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const MOVIE_IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "ma", name: "Marathi" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "sa", name: "Sanskrit" },
  { identifier: "es", name: "Espanol" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
