
## Overview

This is a React application built with Vite that successfully mimics the design shown in the reference image. The project demonstrates responsive web design skills, component-based architecture, and CSS styling techniques.

![Original Design](https://github.com/user-attachments/assets/6224a614-8c8c-45e8-8970-5a47622c2e36)
![My Implementation](https://github.com/user-attachments/assets/dd242451-1b28-4abf-add1-266ac7f0a4ad)

## Features

- **Responsive Layout**: Adapts to different screen sizes with media queries
- **Modern UI Components**: 
  - Navigation bar with mobile hamburger menu
  - Gradient cards with layered elements
  - Custom skill bars with animated ball indicators
  - Company logo showcase section
- **CSS Effects**:
  - Gradient backgrounds
  - Custom 3D-like ball effects
  - Hover animations
  - Custom font integration (Outfit)
  - Responsive image positioning

## Technologies Used

- **React 18**: Modern component-based UI library
- **Vite**: Fast build tool and development server
- **CSS3**: Custom styling with flexbox layout and media queries
- **React Icons**: Used for UI elements like arrows and icons
- **GitHub Pages**: For deployment and hosting

## Project Structure

```
minds-project/
├── public/           # Static assets (images, icons)
├── src/
│   ├── App.jsx       # Main application component
│   ├── App.css       # Global styles
│   ├── main.jsx      # Application entry point
│   ├── Navbar.jsx    # Navigation component
│   ├── Navbar.css    # Navigation styles
│   ├── Mainleft.jsx  # Left section component
│   ├── Mainleft.css  # Left section styles
│   ├── Mainright.jsx # Right section component
│   ├── Mainright.css # Right section styles
│   ├── Footer.jsx    # Footer component
│   ├── Footer.css    # Footer styles
│   ├── Balls.jsx     # Skill bar component (alternate)
│   └── Balls.css     # Skill bar styles (alternate)
└── index.html        # HTML template
```

## Key Components

1. **Navbar**: Responsive navigation with logo, links, and hamburger menu for mobile
2. **Mainleft**: Contains headline, description, call-to-action button, and skill bars
3. **Mainright**: Features decorative elements, testimonial cards, and subscriber count
4. **Footer**: Displays the "Trusted By" section with company logos

## CSS Techniques Used

- **Flexbox**: For responsive layout structure
- **Media Queries**: For mobile responsiveness
- **CSS Gradients**: For card backgrounds and visual elements
- **CSS Positioning**: For layered elements and decorative overlays
- **CSS Shadows**: For depth and dimension
- **Responsive Typography**: Font sizing for different screen sizes

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sphllzulu/1stUIChallenge.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd minds-project
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

## Responsive Design

The layout adapts to different screen sizes:
- **Desktop**: Full two-column layout with all visual elements
- **Mobile**: Stacked layout with adjusted component sizes and spacing

## Browser Compatibility

Tested and working on:
- Chrome
- Firefox
- Safari
- Edge

## Future Improvements

Potential enhancements for future iterations:
- Add more interactive animations
- Implement dark mode toggle
- Create additional pages based on the navigation links
- Improve accessibility features
- Add more responsive breakpoints for different device sizes

## Credits

- Original design reference was provided as part of a UI mimicking project
- Font: [Outfit](https://fonts.google.com/specimen/Outfit) from Google Fonts
- Icons from React Icons library

## License

This project is available for personal and educational use.
