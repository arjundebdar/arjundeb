# 🏋️ FitLog — Workout Library

FitLog is a modern, dark-themed workout library and workout planning application built with **Next.js**. It allows users to explore workouts, view detailed exercise information, create a daily workout plan, save workouts for later, and track completed exercises.


### 🏋️ 1. Workout Library

Browse a collection of workouts with useful information including:

- Workout name
- Exercise category
- Equipment
- Duration
- Calories
- Rating
- Workout image

### 📋 2. Today's Workout Plan

Add workouts to **Today's Plan** and manage them from the **My Plan** page. The daily plan supports a maximum of five workouts.

### 🔖 3. Save Workouts for Later

Save workouts for later and access them from the **Saved** tab on the My Plan page.

### 📊 4. Workout Details

View detailed information for each workout, including:

- Equipment
- Difficulty
- Sets and reps
- Duration
- Calories
- Rating
- Step-by-step instructions

### ✅ 5. Workout Tracking

Mark planned workouts as completed, remove workouts from the plan, and track workout statistics such as exercises, minutes, and calories.

### 🔍 6. Sorting & Responsive Design

Sort workouts by:

- Duration
- Calories
- Rating

The entire application is responsive and works across mobile, tablet, and desktop devices.

---

## 🛠️ Technologies Used

- **Next.js** — React framework and application routing
- **React** — Building interactive user interfaces
- **Tailwind CSS** — Styling and responsive design
- **JavaScript** — Application logic
- **REST API** — Fetching workout data
- **LocalStorage** — Persisting plan and saved workout data

---

## 📱 Responsive Design

FitLog is designed to work smoothly across:

- 📱 Mobile
- 📱 Tablet
- 💻 Desktop

The navigation, hero section, workout library, workout details, and My Plan page adapt to different screen sizes.

---

## 📂 Main Pages

| Route           | Description                                     |
| --------------- | ----------------------------------------------- |
| `/`             | Home page with hero section and workout library |
| `/workout/[id]` | Detailed information for a specific workout     |
| `/my-plan`      | Today's Plan and Saved workouts                 |
| `/*`            | Custom 404 page for invalid routes              |

---

## 🎯 Project Highlights

- Dark, modern fitness-focused interface
- Dynamic workout data from REST API
- Daily workout planning with a five-workout limit
- Saved workout management
- Live Plan and Saved counters
- Toast notifications for user actions
- Workout sorting
- Loading states
- LocalStorage persistence
- Fully responsive layout
- Custom 404 page

---


