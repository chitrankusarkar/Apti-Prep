# Aptitude Preparation Website

This project is a minimalist web application designed to help students prepare for aptitude tests, specifically for campus placements. The website includes various resources such as YouTube playlists, articles, and previous year question papers to aid in preparation.

## Features

- **Navigation Bar**: Easily navigate between different sections of the website.
- **YouTube Playlists**: A curated list of YouTube playlists focused on aptitude preparation.
- **Articles Section**: Access to articles from popular educational websites like GeeksforGeeks and IndiaBix.
- **Previous Papers Section**: A collection of previous year TCS NQT papers for mock tests.
- **Footer**: Contains copyright and contact information.

## Project Structure

```
aptitude-prep-website
├── public
│   └── index.html          # Main HTML document
├── src
│   ├── components          # React components for different sections
│   │   ├── Navbar.tsx
│   │   ├── PlaylistSection.tsx
│   │   ├── ArticlesSection.tsx
│   │   ├── PreviousPapersSection.tsx
│   │   └── Footer.tsx
│   ├── data                # JSON files containing data for the sections
│   │   ├── playlists.json
│   │   ├── articles.json
│   │   └── previousPapers.json
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React application
│   └── styles              # CSS styles for the website
│       └── main.css
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd aptitude-prep-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.