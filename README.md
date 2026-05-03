# Fernando Lopez - Personal Portfolio
A responsive single-page application (SPA) designed to showcase software engineering projects and technical experience. Built with React and Vite, this project emphasizes component modularity, custom CSS architecture, and serverless integrations.

# Key Features
Dynamic Background System: Implements a custom PuzzleBackground component using SVG paths and probabilistic rendering loops to create organic, non-deterministic animations.

Custom Design System: Utilizes a centralized CSS variable strategy (global.css) for consistent theming across typography, spacing, and the specific "Carbon & Gold" color palette.

Responsive Architecture: fluid layout adapters for mobile and desktop viewports, managed via native CSS media queries and React state listeners.

Tech Stack
Core: React 18+

Build Tool: Vite

Styling: CSS3 (Variables, Flexbox, Grid, Keyframe Animations)

Services: EmailJS (Form Handling)

# Installation & Setup
Clone the repository

'''
Bash

git clone https://github.com/FernandoLpz0911/portfolio.git
cd portfolio
Install dependencies
'''

'''
Bash

npm install
Run the development environment
'''

'''
Bash

npm run dev
Build for production
'''

'''
Bash

npm run build
'''

# Project Structure

'''
Plaintext

src/
├── assets/          # Static media assets
├── components/      # Functional React components
│   ├── Experience.jsx # Timeline visualization
│   ├── PuzzleBackground.jsx # SVG animation logic
│   └── ...
├── styles/          # Stylesheets
│   ├── global.css   # Root variables and reset
│   ├── App.css      # Layout scaffolding
│   └── ...
├── App.jsx          # Main application composition
└── main.jsx         # DOM entry point

'''

# License
Distributed under the MIT License.