# React Assignment

A basic React application that allows users to explore various programming technologies, view their details, and curate their own personalized technology stack.

---

## 📝 Description

**TechStack Explorer** is a modern React web application designed to help developers and learners filter through different technologies, frameworks, and programming languages. Users can browse a comprehensive catalog grouped by categories, analyze difficulty ratings, and dynamically add or remove items to build their ideal developer stack. The application leverages advanced React hooks and dynamic promise-based data loading to ensure a fast, fluid, and responsive user experience.

---

## 🛠️ Technologies Used

This project is built using :
* **React 19** (Leveraging `use` hook and modern state architecture)
* **Tailwind CSS** (For utility-first components and styling)
* **DaisyUI** (For pre-styled, accessible UI components like badges)
* **JavaScript (ES6)**
* **HTML5 & CSS**

---

## ✨ Key Features

* ** Real-Time Stack Builder:** Users can dynamically click "Add to Stack" to select multiple technologies. The curated list instantly syncs and renders in a dedicated sidebar component (`SelectStack`).
* ** Interactive Badge & Status System:** Automatically tracks which technologies are already added, and toggles statuses between "Add to Stack" and "Added" without page reloads.
* ** Async Data Resolution:** Utilizes progressive rendering principles by passing data promises down to components, ensuring seamless loading of JSON data catalogs.

---

## 

### 1. What is JSX, and why is it used in React?
* **Answer:** JSX stands for **JavaScript XML**. It is a syntax extension that allows us to write HTML-like code directly inside JavaScript. 
* **Why used:** It makes writing UI components much easier, cleaner, and faster because I don't have to use complex document methods (`document.createElement`) to create simple HTML tags.

### 2. What is the difference between props and state?
* **Answer:** 
  * **Props:** Short for "properties." They are read-only data passed down from a **parent component to a child component** (like parameters in a function). The child cannot change them.
  * **State:** A built-in object that holds data **local to the component** itself. It can be changed inside that component, and whenever it changes, the component updates (re-renders) on the screen.

### 3. What does the `useState` hook do, and where did you use it in this project?
* **Answer:** The `useState` hook creates a local state inside a functional component to remember user interactions or data changes.
* **In this project:** I used it inside the `ProgData` component (`const [selectedId, setSelectedId] = useState([])`) to keep track of an array of technology IDs that the user has added to their stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
* **Answer:** The `useEffect` hook tells React that a component needs to do something **after** rendering. It is commonly used for fetching data from an API or a local file.
* **Why needed:**  It is needed to load JSON data because fetching data takes time (asynchronous operation). `useEffect` ensures the app fetches the data exactly once when the page loads, preventing the app from infinite loops of re-fetching. 

### 5. Why does every item in a `.map()` list need a unique `key` prop?
* **Answer:** React needs to know exactly which item in a list changed, was added, or got removed. A unique `key` gives each element a distinct identity so React can update only that specific part of the screen quickly, instead of rebuilding the entire list.

### 6. What is conditional rendering? Show one place you used it.
* **Answer:** Conditional rendering means showing or hiding specific UI elements based on a condition (like an `if/else` statement or a ternary operator `? :`).
* **Example from project:** In `ProgData.jsx`, I checked if the stack is empty to show a placeholder message:
  ```jsx
  {selectedId.length==0 ?
                    `Empty Stake!`
                    :
                    `${selectedId.length} technologies selected.`
                    }
  ```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
* **Answer:** 
  * **Parent to Child:** The parent sends data downward by adding attributes called **Props** to the child component (e.g., `<SelectStack tech={tech} />`).
  * **Child to Parent:** The parent passes a **callback function** as a prop to the child. When something happens in the child (like a click), the child triggers that function and passes data back up as arguments.
