# Mindtrip 🌍✈️

**Mindtrip** is a React-based travel companion application designed to help you explore exciting destinations, discover local attractions, and plan your trips with ease.

## ✨ Features

- **Interactive Maps:** Powered by the Google Maps API to help you visualize and find places of interest.
- **Travel Advisor Integration:** Get data from RapidAPI’s Travel Advisor for insights, ratings, and more.
- **Easy Filtering & Searching:** Filter places by type and rating to find exactly what you’re looking for.

## 🛠 Prerequisites

- **Node Version Manager (nvm):** Ensure that `nvm` is installed on your system before proceeding.

## ⚙️ Setup Instructions

1. **Set up Node.js environment**

   ```bash
   nvm install 16.20.0
   nvm use 16

   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables Setup**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   REACT_APP_RAPIDAPI_KEY=your_rapidapi_key
   ```

   To get the API keys:

   - For Google Maps API key: Visit [Google Cloud Console](https://console.cloud.google.com/)
   - For RapidAPI Travel Advisor: Visit [RapidAPI](https://rapidapi.com/) and subscribe to the Travel Advisor API

## Running the Application

Start the development server:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Testing

Run unit tests for List and Map components:

```bash
npm test
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects the app from Create React App

## Note

Make sure to keep your API keys private and never commit the `.env` file to version control.

## Content Highlights

- **Search Functionality:** Emphasizes the ability to search for restaurants, tourist attractions, and hotels by name.
- **Mapping:** Highlights the integration with Google Maps for visualizing locations.
<img width="1728" alt="Screenshot 2024-12-10 at 10 30 00 PM" src="https://github.com/user-attachments/assets/90f57ade-af10-4ec0-9718-eddbdd5778e8">

- **Global Searches:** Points out the flexibility to search in any city worldwide, catering to both local and international travelers.
- **User Benefits:** Briefly mentions how Mindtrip simplifies travel planning, making it more user-friendly and efficient.
<img width="1727" alt="Screenshot 2024-12-10 at 10 31 11 PM" src="https://github.com/user-attachments/assets/4332f548-0f36-4df8-bd2b-ff5f2c31e139">

