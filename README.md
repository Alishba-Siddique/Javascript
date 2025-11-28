# Learning Javascript

Here is a clean, polished **README.md** for your “Car Engine Soundboard” project — perfect for GitHub and portfolios.
Let me know if you want badges, screenshots, or a more advanced version.

---

# 🎧 Car Engine Soundboard

A visually rich and interactive soundboard that lets users tap on car brand logos to **change the background** and **play the matching engine sound**.
Built with **HTML, CSS (Glassmorphism UI), and JavaScript**.

---

## 🚗 Features

### ✅ Dynamic Background

Clicking a car logo updates the wallpaper with a smooth transition.

### 🎵 Engine Sounds

Each logo plays a unique engine sound.
When a new sound plays, the previous one automatically stops.

### 💎 Glassmorphism UI

Modern frosted-glass car logo cards with clean hover scaling.

### 📱 Responsive Layout

Logos auto-adjust for different screen sizes.
The last two logos are centered in a separate row.

### 🏎️ Car Brands Included

* Ferrari
* Mercedes
* Jaguar
* Lamborghini
* BMW
* Tesla
* F1
* Rolls-Royce

---

## 📂 Project Structure

```
/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── default-bg.jpg
│   ├── ferrari.png
│   ├── mercades.png
│   ├── ...
│   ├── car-brand-bg.jpg
│   └── ...
└── audio/
    ├── ferrari.mp3
    ├── mercedes.mp3
    ├── jaguar.mp3
    ├── ...
```

---

## 🛠️ Technologies Used

* **HTML5** – structure
* **CSS3** – glass UI, responsiveness, animations
* **JavaScript** – background switching + audio control

---

## 🚀 How to Run

### Option 1 — Local Browser (Easy)

1. Download or clone the repo:

   ```bash
   git clone https://github.com/yourusername/car-engine-soundboard.git
   ```
2. Open **index.html** in a browser (Chrome recommended).
3. Enjoy the engine sounds! 🔊

### Option 2 — Live Server (Recommended)

If you have VS Code:

1. Install the **Live Server** extension.
2. Right-click `index.html`
3. Click **Open with Live Server**.

---

## 🧠 How It Works

### 🎨 Background Change

JavaScript updates the background using:

```js
document.getElementById('bg-image').style.backgroundImage = `url("${imageUrl}")`;
```

### 🔊 Audio System

Ensures only one sound plays at a time:

```js
if (currentAudio) {
  currentAudio.pause();
  currentAudio.currentTime = 0;
}
```

---

## 📸 Screenshot

<img width="923" height="457" alt="image" src="https://github.com/user-attachments/assets/6d7336f8-a5c8-4614-9d13-3a1788caa6da" />


```
![Preview](./images/screenshot.png)
```

---

## 📌 Future Improvements (Optional Ideas)

* Add more car brands
* Add neon hover glow animation
* Add sound equalizer animation
* Add “Stop Sound” button
* Add mobile layout & touch ripple effects

---

