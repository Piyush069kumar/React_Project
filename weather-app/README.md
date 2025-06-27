# ☁️ Weather Application

A modern **React-based Weather Application** that allows users to check current weather either by **searching a city** or by **using their current location**. It uses the [OpenWeatherMap API](https://openweathermap.org/api) and provides a responsive and clean UI.

---
[screenshot](image.png)
[screenshot](image1.png)
---

## 🔍 Features

* 📍 Search weather by **city name**
* 🌎 Get weather info using **current location** (with permission)
* ⏳ Shows loading spinner while fetching data
* ☁️ Weather details: temperature, humidity, wind speed, condition
* 📊 Reusable components and clean folder structure
* 💾 Uses **Context API** for global state management
* ✨ CSS modules for scoped, customized styles

---

## 📁 Project Structure

```
weather-app/
├── public/
├── src/
│   ├── assets/              # Images like cloud, wind, humidity, etc.
│   ├── component/           # Reusable UI components like WeatherCard, Spinner
│   ├── context/             # AppContext for global state
│   ├── pages/               # Page-level components (SearchWeather, YourWeather)
│   ├── App.jsx              # Root component with routing
│   ├── App.css              # Global styles
│   └── index.js             # Entry point
├── .env                    # API key config
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup API Key

Create a `.env` file in the root directory and add your OpenWeatherMap API key:

```env
REACT_APP_API_KEY=your_api_key_here
```

### 4. Run the Application

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📊 Functionality Overview

### Search by City

* Navigate to `/city`
* Input city name
* Click Search
* Displays weather info (temperature, humidity, wind, condition)

### Use Current Location

* Navigate to `/location`
* Allow browser to access your geolocation
* App fetches and displays weather info

---

## 🔎 API Used

* [OpenWeatherMap API](https://openweathermap.org/current)

---

## ⚡ Tech Stack

* React (with Hooks)
* React Router
* Context API
* Custom CSS (modular)
* OpenWeatherMap API

---

## ✨ Future Improvements

* Add 5-day forecast
* Switch between °C/°F
* Improve mobile responsiveness
* Add animated weather icons
* Deploy to GitHub Pages or Netlify

---

## 🚫 Known Issues

* Location permission must be enabled manually
* No autocomplete or validation for city names

---

## © License

This project is licensed under the [MIT License](LICENSE).

---

## 📍 Screenshots

> To add a screenshot:
>
> * Place the image in the `src/assets/` folder
> * Reference it in your README like this:

```


---

## 🌟 Acknowledgements

* Thanks to [OpenWeatherMap](https://openweathermap.org/) for the API.

---

Happy coding! ✨
