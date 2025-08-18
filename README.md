
# 😂 Random Dad Joke Generator

A simple web app that fetches random dad jokes from the [icanhazdadjoke API](https://icanhazdadjoke.com/api) and lets users copy them to their clipboard.

---

## 🚀 Features
- Fetches random dad jokes with a button click  
- Displays jokes inside a text area  
- Copy jokes to clipboard with one click  
- Responsive design for desktop & mobile  
- Uses modern **async/await** for fetching  

---

## 🛠️ Tech Stack
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Font Awesome** for icons  
- **[icanhazdadjoke API](https://icanhazdadjoke.com/api)**

---

## 📂 Project Structure
```

├── index.html    # Main HTML file
├── style.css     # Styling and responsiveness
├── jokes.js      # Logic for fetching and copying jokes
└── favicon.ico   # Site icon (optional)

````

---

## 📜 Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/random-dad-joke.git
   ```

2. Open `index.html` in your browser.

3. Click **"Click to see a worst dad joke ever"** to fetch a new joke.

   * The joke will appear in the text area.
   * Use the **"Copy"** button to copy it to your clipboard.

---

## 🔑 API Reference

This project uses the free **icanhazdadjoke API**.
Endpoint:

```http
GET https://icanhazdadjoke.com/
```

Headers:

```json
{
  "Accept": "application/json",
  "User-Agent": "MyJokesApp (https://mywebsite.com)"
}
```

Response Example:

```json
{
  "id": "R7UfaahVfFd",
  "joke": "Did you hear about the cheese factory that exploded in France? There was nothing left but de Brie.",
  "status": 200
}
```

---

## 📱 Responsive Design

The app is responsive and works well on:

* 🖥️ Desktop
* 📱 Mobile
* 📟 Tablets

---

## 🖼️ Screenshot

<img width="900" height="452" alt="image" src="https://github.com/user-attachments/assets/02da79af-f56e-46b0-a176-cf3335ab9b4a" />

---

## 💡 Improvements

* Add a **"Save Joke"** feature to store favorites
* Add **dark/light mode** toggle
* Show multiple jokes at once
* Share jokes directly to **Twitter / WhatsApp**

---

Made with ❤️ and bad jokes

