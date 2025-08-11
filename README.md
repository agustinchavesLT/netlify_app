# Netlify Redirects Investigation

A React application designed to investigate and test how Netlify handles various redirect scenarios.

## Features

- **Three Main Routes**: HOME, PROFILE, and BLOG
- **Modern UI**: Clean, responsive design with smooth animations
- **Routing**: Client-side routing using React Router
- **Netlify Ready**: Configured for easy deployment to Netlify

## Project Structure

```
NETLIFY_APP/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Profile.js
│   │   └── Blog.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── index.css
├── package.json
├── webpack.config.js
├── .babelrc
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm start
```

This will:

- Start the development server on port 3000
- Open your browser automatically
- Enable hot reloading
- Configure history API fallback for routing

### Building for Production

To create a production build:

```bash
npm run build
```

This will create a `dist/` folder with optimized files ready for deployment.

## Routes

### HOME (/)

- Landing page with project overview
- Information about available routes
- Project description

### PROFILE (/profile)

- Sample user profile page
- Test content for redirect scenarios
- Profile information display

### BLOG (/blog)

- Sample blog posts
- Content about Netlify redirects
- Educational material for investigation

## Netlify Deployment

This project is configured for easy deployment to Netlify:

1. Push your code to a Git repository
2. Connect the repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

## Redirect Testing

Use this application to test various Netlify redirect configurations:

- **Client-side routing**: Test how Netlify handles SPA routing
- **Custom redirects**: Add `_redirects` file to test redirect rules
- **404 handling**: Test custom 404 pages
- **URL rewrites**: Test URL rewriting scenarios

## Technologies Used

- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **Webpack**: Module bundling and development server
- **Babel**: JavaScript transpilation
- **CSS3**: Modern styling with gradients and animations

## Contributing

This is an investigation project. Feel free to modify and extend it for your own redirect testing needs.

## License

ISC
