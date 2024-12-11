# Mindtrip 🌍✈️

**Mindtrip** Mindtrip is a modern, React-based travel companion application that empowers travelers to explore the world with ease. Whether you're planning your next adventure or discovering hidden gems in a new city, Mindtrip combines powerful tools and intuitive features to make every trip seamless and unforgettable. 

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

## User Interface Highlights
1. **Modern and Intuitive Design**
- Mindtrip’s user interface boasts a clean, modern design with a focus on usability and responsiveness. The layout adapts seamlessly to different devices—desktop, tablet, and mobile—ensuring a smooth and accessible experience for all users.

- Clear Navigation Bar: The top navigation bar provides easy access to core features such as Maps, Search, and Favorites.
- Dynamic Feedback: Real-time feedback, such as loading indicators and result updates, keeps users informed during their interactions.

2. **Interactive Map Section**
- Map View: The primary screen integrates Google Maps to display points of interest (POIs) with interactive markers. Users can pan, zoom, and interact with the map to explore nearby attractions.
- Filter Overlays: Users can filter POIs by categories (e.g., Restaurants, Hotels, Attractions) or ratings directly on the map.
Info Pop-ups: Clicking on a marker reveals a pop-up with location details, including photos, descriptions, and ratings.

3. **Search and Filter Panel**
- Search Bar: Located on the left panel, the search bar supports keyword entry for places, city names, and specific locations, making it easy to pinpoint desired destinations.
- Filter Options: Dropdown menus and sliders allow users to filter results by ratings, distance, and categories.
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

