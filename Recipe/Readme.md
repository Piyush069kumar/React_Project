

# 🍽️ Recipe Finder

A simple and interactive React application to search and explore cooking recipes using [TheMealDB API](https://www.themealdb.com/). Users can search meals, filter by category, view ingredients and instructions, and save their favorite recipes locally.

---
[screenshot](image.png)
[screenshot](image1.png)
---

## 🌟 Features

- 🔍 **Live Search**: Search recipes by name
- 📂 **Filter by Category**: Explore meals by category
- 📋 **Detailed View**: See ingredients and cooking instructions in a modal
- 💾 **Save Recipes**: Store your favorites in localStorage
- ❌ **Remove Saved**: Delete recipes from saved list
- 🎨 **Responsive UI**: Styled with Tailwind CSS
- 🔔 **Toast Notifications**: Feedback on actions

---

## 🛠️ Tech Stack

- **React.js**
- **React Router DOM**
- **Tailwind CSS**
- **React Hot Toast**
- **TheMealDB API**

---

## 📁 Folder Structure



---
Recipe/
├── components/
│ ├── Card.jsx
│ ├── Category.jsx
│ ├── Navbar.jsx
│ ├── RecipeModal.jsx
│ └── Search.jsx
├── pages/
│ ├── Home.jsx
│ └── MyRecipes.jsx
├── App.jsx
└── main.jsx


---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

```bash
git clone https://github.com/Piyush069kumar/React_Project.git
cd React_Project/Recipe
npm install
npm run dev


---

Visit: http://localhost:5173/


📚 API Used
Get Categories: https://www.themealdb.com/api/json/v1/1/categories.php

Filter by Category: https://www.themealdb.com/api/json/v1/1/filter.php?c=...

Search Recipes: https://www.themealdb.com/api/json/v1/1/search.php?s=...

Random Recipe: https://www.themealdb.com/api/json/v1/1/random.php

🙌 Acknowledgements
TheMealDB

React, Tailwind, Toast, and Open Source Libraries