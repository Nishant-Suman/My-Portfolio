# 🚀 R.M. Nishant Suman - Personal Portfolio Website

A futuristic, interactive, and high-performance portfolio website built to showcase expertise in **Artificial Intelligence & Machine Learning**, **Autonomous Drone Systems & UAVs**, **Internet of Things (IoT)**, **Technical Leadership at Drone Sarthi Pvt Ltd**, and **School & College Mentorship**.

---

## 🌟 Key Features

- **Cyber-Aerotech & AI Neural Matrix Design**: Sleek dark theme with neon cyan, indigo, and emerald luminous highlights.
- **Dynamic Neural / Drone Constellation Canvas**: Real-time particle connection network responding to mouse motion.
- **Dynamic Typing Effect**: Cycles through your core titles & expertise.
- **Interactive Project Showcase**: Filter projects by categories (*All*, *Drones & UAVs*, *AI & ML*, *IoT*, *Mentorship*) with detailed inspect modals.
- **Career Timeline & Leadership**: Highlights your role as *Technical Lead @ Drone Sarthi Pvt Ltd*, competitive internship selections, and mentorship.
- **Skills Matrix with Animated Progress Bars**: Categorized visual ratings across AI/ML, Drones, IoT, and Tools.
- **Hackathon & Achievements Gallery**: Honors and event victories showcase.
- **School & College Mentorship Hub**: Highlights of workshops delivered and inquiry booking CTA.
- **Interactive Contact Form & Social Badges**: Instant simulated submission feedback and direct links.
- **Dark / Light Mode**: Seamless theme toggle with local storage persistence.
- **Fully Responsive**: Optimized for ultra-wide desktop monitors, tablets, and smartphones.

---

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML5 structure with Lucide icons & Tailwind styling
├── styles.css          # Futuristic neon glows, radar HUD animations & glassmorphism
├── main.js             # Canvas engine, typing effect, filter system, modals & interactions
├── projects-data.js    # Easy-to-edit configuration file for all your content
└── README.md           # Instructions for customization and deployment
```

---

## 🛠️ How to Preview Locally

### Option 1: Direct File Opening
Double-click on `index.html` or right-click -> **Open with Google Chrome / Edge / Firefox**.

### Option 2: Using a local web server (Recommended)
From PowerShell / Command Prompt inside the portfolio folder:
```powershell
# Using Python (built-in):
python -m http.server 3000

# Or using Node.js:
npx serve .
```
Then open `http://localhost:3000` in your browser!

---

## ✏️ How to Customize Your Details

All profile content is cleanly isolated in **[`projects-data.js`](projects-data.js)**:

1. **Add Your Profile Photo**:
   - Place your picture into the `assets/` folder as `profile.jpg` (or `profile.png`).
   - File path: [`portfolio/assets/profile.jpg`](assets/profile.jpg).
   - If your image has a different name or format (e.g. `assets/my-photo.png`), simply update `profileImage` in [`projects-data.js`](projects-data.js).
2. **Update Social Links & Email**:
   - Open `projects-data.js` and change `email`, `github`, `linkedin`, and `twitter`.
3. **Add Your Resume PDF**:
   - Place your resume PDF in the folder (e.g. `resume.pdf`) and set `resumeLink: "resume.pdf"`.
4. **Add or Modify Projects**:
   - Add new entries to the `projects: [...]` array with title, category, tech stack, and description.
5. **Update Achievements & Events**:
   - Add hackathons or awards to `achievements: [...]`.

---

## 🌐 Free 1-Click Deployment

### Deploy on GitHub Pages:
1. Create a new GitHub repository (e.g., `portfolio` or `<your-username>.github.io`).
2. Push this folder's contents to the repository.
3. Go to **Settings > Pages** and select the `main` branch to deploy instantly for free!

### Deploy on Vercel or Netlify:
1. Drag and drop the `portfolio` folder onto [Netlify Drop](https://app.netlify.com/drop) or import from GitHub on [Vercel](https://vercel.com).
2. Your live website URL will be ready in under 30 seconds!
