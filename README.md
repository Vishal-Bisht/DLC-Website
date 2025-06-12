# Digital Literacy Campaign (DLC) Web App

A modern, accessible, and multilingual React + Vite web application by CollegeTips.in to empower everyone—especially parents, seniors, and beginners—with essential digital skills.

## Features

- **Accessible UI**: Adjustable font size, high contrast mode, and voice command support.
- **Multilingual**: Language selector with i18n support (English, Hindi, and more).
- **Modern Design**: Beautiful, responsive layout with custom branding and icons.
- **AI Chatbot**: Friendly DigiBuddy chatbot for instant help (with OpenAI or local logic).
- **Video Tutorials**: Step-by-step guides for WhatsApp, UPI, video calls, safety, and more.
- **Special Programs**: Dedicated sections for Parents, Students, Creators, Everyone, and Society.
- **Feedback & Support**: Easy feedback form and contact info.


### Installation
```sh
cd DLC
npm install
```

### Development
```sh
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```sh
npm run build
```

### Environment Variables (Optional for AI Chatbot)
To use OpenAI for the chatbot, add a `.env` file:
```
VITE_OPENAI_API_KEY=sk-...
```

# Check it out here [https://dlc-website-dusky.vercel.app/]

## Project Structure
- `src/components/` — All React components (pages, common, chatbot, home, etc.)
- `src/i18n.js` — i18n configuration and translation keys
- `public/` — Static assets (logo, images)
- `App.jsx` — Main app entry

## Customization
- Add images for About page sections in `public/` (e.g., `parents.webp`, `students.webp`, etc.)
- Update translations in `src/i18n.js` for more languages
- Adjust theme and branding in `index.css` and component files

## License
This project is for educational and non-commercial use. Contact CollegeTips.in for partnership or licensing.
