# 🏋️ FitLog — Workout Library

**FitLog** is a modern, dark-themed workout library and workout planning application built with Next.js. It helps users explore exercises, view detailed workout information, create a daily workout plan, save exercises for later, and track completed workouts.

## 🚀 Live Project

**Live Link:** Add your deployed Vercel/Netlify/Cloudflare URL here

**GitHub Repository:** Add your GitHub repository URL here

---

## ✨ Features

### 1. 🏋️ Workout Library

Browse a collection of workouts with useful information such as:

* Workout name
* Exercise category
* Equipment
* Duration
* Calories
* Rating
* Workout image

### 2. 📋 Today's Workout Plan

Add workouts to your daily plan and manage them from the **My Plan** page. The daily plan supports up to five workouts.

### 3. 🔖 Save Workouts for Later

Save your favorite workouts and access them anytime from the **Saved** tab.

### 4. 📊 Workout Details

View complete workout information including:

* Equipment
* Difficulty
* Sets and reps
* Duration
* Calories
* Rating
* Step-by-step instructions

### 5. ✅ Workout Tracking

Mark planned workouts as completed, remove workouts from your plan, and keep track of your daily workout statistics.

### 6. 🔍 Sorting & Responsive UI

Sort workouts by duration, calories, or rating. The application is fully responsive and works across mobile, tablet, and desktop devices.

---

## 🛠️ Technologies Used

* **Next.js** — React framework and application routing
* **React** — Building interactive user interfaces
* **Tailwind CSS** — Styling and responsive design
* **Lucide React** — Icons
* **REST API** — Fetching workout data
* **LocalStorage** — Persisting workout plans and saved workouts
* **JavaScript** — Application logic

---

## 🔗 API

FitLog uses the following API to load workout data:

**All Workouts**

```text
https://api.abcz.workers.dev/api/fitlog
```

**Single Workout**

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

---

## 📱 Responsive Design

FitLog is designed to provide a consistent experience across:

* 📱 Mobile
* 📱 Tablet
* 💻 Desktop

The workout library, navigation, hero section, workout details, and My Plan page adapt to different screen sizes.

---

## 📂 Main Pages

| Page            | Description                                     |
| --------------- | ----------------------------------------------- |
| `/`             | Home page with hero section and workout library |
| `/workout/[id]` | Detailed workout information                    |
| `/my-plan`      | Today's Plan and Saved workouts                 |
| `/*`            | Custom 404 page for invalid routes              |

---

## 🎯 Project Highlights

* Dark, modern fitness-focused UI
* Dynamic workout data from REST API
* Daily workout planning with a 5-workout limit
* Saved workout management
* Live Plan and Saved counters
* Toast notifications for user actions
* Workout sorting functionality
* Loading states while fetching data
* Persistent workout data using LocalStorage
* Fully responsive layout

---

## 📌 Assignment

This project was developed as part of the **Programming Hero B14-A6 FitLog** assignment.

> **Train with intent. Log every set.**

---

## 👨‍💻 Developer

**Arjun Deb**

Built with ❤️ using Next.js and Tailwind CSS.
