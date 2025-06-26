# 📝 React To-Do List App

A fully functional, interactive To-Do List built using **React**. This app enables users to **add**, **edit**, **delete**, **complete**, and **filter** tasks. It supports **persistent storage using localStorage** and provides **toast notifications** using `react-hot-toast`.

---

## 🔍 Key Features

* ➕ Add new tasks
* 📝 Edit existing tasks inline
* 🗑️ Delete tasks
* ✅ Mark tasks as completed
* ↻ Toggle between **All**, **Completed**, and **Pending** tasks
* 📏 Save tasks automatically in browser localStorage
* 🚀 Real-time toast alerts for actions (add, edit, delete)
* ⚡ Clean and modular component structure

---

## 🏧 Project Structure

```
project/
│
├── public/
│   └── index.html
│
├── src/
│   ├── comopenets/
│   │   ├── AddTask.js
│   │   ├── TaskItem.css
│   │   ├── TaskItem.js
│   │   ├── TaskList.css
│   │   └── TaskList.js
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── package.json
└── README.md
```

> ⚠️ **Note**: The folder `comopenets` is likely a typo and should be renamed to `components` for clarity and convention.

---

## 🧑‍💻 How It Works

### Task Actions

| Action      | Functionality Description                                   |
| ----------- | ----------------------------------------------------------- |
| Add Task    | Type in the input and click **Add Item** or press **Enter** |
| Edit Task   | Click **Edit**, modify the text, then click **Save**        |
| Delete Task | Click the **Delete** button beside the task                 |
| Complete    | Use the checkbox to toggle task completion                  |
| Filter      | Select from dropdown: All / Completed / Pending             |

### Task Persistence

* Tasks are **stored in `localStorage`** on every change.
* When the app loads, it reads from `localStorage` and displays previously saved tasks.

---

## 💪 Built With

* ⚛️ [React](https://reactjs.org/) – for building the UI
* 🔔 [react-hot-toast](https://react-hot-toast.com/) – for toast notifications
* 💅 Plain CSS – for styling components

---

## 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/react-todo-app.git
   cd react-todo-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the app**

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📸 Preview

> Here’s a mockup of how the app behaves:

* 🟢 Task added successfully toast
* 🟡 Editing task inline
* 🔴 Deleting a task removes it from the list and localStorage

---

## 🔧 Customization

You can enhance this project by:

* Adding due dates and priority levels
* Styling with Tailwind, Bootstrap, or Material UI
* Implementing drag-and-drop to reorder tasks
* Creating user authentication and storing tasks in a backend (e.g., Firebase)

---

## ❌ Known Issues

* Folder `comopenets` should be renamed to `components` for consistency.
* A small typo in color styling inside `TaskItem.js`:

  ```js
  color: todo.completed ? "#bbbbbb" : "#color: #bbbbbb;"; // should be: "#bbbbbb"
  ```

---

## ✨ Credits

This project was created as a simple React application to demonstrate component-based architecture, localStorage usage, and toast notifications.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
