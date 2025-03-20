<img src="https://cdn.jsdelivr.net/gh/velvetcss/velvet/banner.png"></img>
<div align="center">
<img src="https://img.shields.io/badge/License-MIT-green" alt="License"></img>
<img src="https://img.shields.io/badge/Status-Alpha-yellow" alt="Status"></img>
</div>
Velvet is a lightweight, modern CSS and JavaScript stylings designed to create beautiful UI components with minimal effort. It provides a consistent design system with smooth animations, modern styling, and easy customization.

## Features

- 🎨 Beautiful color system with primary, secondary, and semantic colors
- ✨ Smooth animations and transitions
- 📱 Responsive components out of the box
- 🌙 Built-in dark mode support
- 🧩 Modular architecture
- 🚀 Automatic animations for newly added elements
- ⚡ Lightweight with no dependencies

## Installation

### Method 1: Via CDN

```html
<!-- CSS -->
<link rel="stylesheet" href="https://esm.run/velvetcss/velvet.css">

<!-- JS (place before </body>) -->
<script src="https://esm.run/velvetcss/velvet.js"></script>
<script>
  // Initialize Velvet
  Velvet.init();
</script>
```

### Method 2: Download and Include Locally

1. Download the `velvet.css` and `velvet.js` files
2. Include them in your HTML:

```html
<!-- CSS -->
<link rel="stylesheet" href="path/to/velvet.css">

<!-- JavaScript (place before </body>) -->
<script src="path/to/velvet.js"></script>
<script>
  // Initialize Velvet
  Velvet.init();
</script>
```

## Usage

### Basic Components

#### Buttons

```html
<!-- Default button -->
<button>Default Button</button>

<!-- Button variants -->
<button class="velvet-btn-secondary">Secondary Button</button>
<button class="velvet-btn-accent">Accent Button</button>
<button class="velvet-btn-success">Success Button</button>
<button class="velvet-btn-warning">Warning Button</button>
<button class="velvet-btn-danger">Danger Button</button>

<!-- Outline buttons -->
<button class="velvet-btn-outline">Outline Button</button>
<button class="velvet-btn-outline velvet-btn-secondary">Secondary Outline</button>

<!-- Button sizes -->
<button class="velvet-btn-sm">Small Button</button>
<button class="velvet-btn-lg">Large Button</button>

<!-- Round and icon buttons -->
<button class="velvet-btn-round">Round Button</button>
<button class="velvet-btn-icon">🔍</button>
```

#### Cards

```html
<!-- Default card -->
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</div>

<!-- Flat card (no shadow) -->
<div class="card velvet-card-flat">
  <h3>Flat Card</h3>
  <p>This card has no shadow, only a border</p>
</div>

<!-- Bordered card -->
<div class="card velvet-card-bordered">
  <h3>Bordered Card</h3>
  <p>This card has a custom border</p>
</div>
```

#### Form Elements

```html
<!-- Text input -->
<input type="text" placeholder="Enter your name">

<!-- Input sizes -->
<input type="text" class="velvet-input-sm" placeholder="Small input">
<input type="text" class="velvet-input-lg" placeholder="Large input">

<!-- Input group -->
<div class="velvet-input-group">
  <input type="text" placeholder="Search...">
  <button>Search</button>
</div>

<!-- Toggle switch -->
<label class="velvet-switch">
  <input type="checkbox">
  <span class="velvet-slider"></span>
</label>
```

### Layout Utilities

```html
<!-- Flex container -->
<div class="velvet-flex velvet-justify-between velvet-align-center velvet-gap">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Grid layout -->
<div class="velvet-grid">
  <!-- Grid items will automatically span across 12 columns -->
  <div>Grid item 1</div>
  <div>Grid item 2</div>
</div>
```

### Dark Mode

Velvet supports dark mode through a data attribute:

```html
<!-- Enable dark mode -->
<body data-theme="dark">
  <!-- Your content -->
</body>

<!-- JavaScript toggle -->
<script>
  function toggleDarkMode() {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
      body.removeAttribute('data-theme');
    } else {
      body.setAttribute('data-theme', 'dark');
    }
  }
</script>
```

## JavaScript API

Velvet provides a JavaScript API for enhanced functionality:

```javascript
// Initialize the framework
Velvet.init();

// Disable animations (useful for performance optimization)
Velvet.disableAnimations();

// Re-enable animations
Velvet.enableAnimations();
```

## CSS Variables

Velvet uses CSS variables for easy customization:

```css
:root {
  /* Customize colors */
  --velvet-primary: #ff4081;
  --velvet-secondary: #aa00ff;
  
  /* Customize timing */
  --velvet-duration: 0.4s;
  
  /* Customize border-radius */
  --velvet-radius: 12px;
}
```

## Excluding Elements

If you need to exclude certain elements from Velvet's styles, add the `velvet-exclude` class:

```html
<button class="velvet-exclude">This button will not have Velvet styles</button>
```

## Component Reference

### Buttons
- Default button
- Color variants: `velvet-btn-secondary`, `velvet-btn-accent`, `velvet-btn-success`, `velvet-btn-warning`, `velvet-btn-danger`
- Styles: `velvet-btn-outline`
- Sizes: `velvet-btn-sm`, `velvet-btn-lg`
- Shapes: `velvet-btn-round`, `velvet-btn-icon`

### Cards & Containers
- Card, article, section, .container, .box, aside
- Variants: `velvet-card-flat`, `velvet-card-bordered`

### Form Elements
- Input, textarea, select
- Sizes: `velvet-input-sm`, `velvet-input-lg`
- Groups: `velvet-input-group`
- Toggle switches: `velvet-switch`, `velvet-switch-sm`, `velvet-switch-lg`

### Links
- Default styling
- Variants: `velvet-link-no-underline`, `velvet-link-button`

### Tables
- Default styling
- Variants: `velvet-table-striped`, `velvet-table-bordered`

### Images
- Variants: `velvet-img-circle`, `velvet-img-thumbnail`

### Lists
- Variants: `velvet-list-unstyled`, `velvet-list-inline`

### Progress Bars
- Default: `progress` with `progress-bar` inside
- Variants: `velvet-progress-striped`, `velvet-progress-animated`, `velvet-progress-secondary`, etc.
- Sizes: `velvet-progress-sm`, `velvet-progress-lg`

### Badges
- Default: `badge`
- Colors: `velvet-badge-primary`, `velvet-badge-secondary`, etc.
- Styles: `velvet-badge-pill`, `velvet-badge-outline`

### Loaders & Spinners
- Types: `velvet-loader`, `velvet-spinner-dots`, `velvet-spinner-ripple`, `velvet-spinner-pulse`
- Variants: `velvet-loader-sm`, `velvet-loader-lg`

### Layout Utilities
- Flex: `velvet-flex`, `velvet-flex-column`, `velvet-flex-grow`
- Justification: `velvet-justify-center`, `velvet-justify-between`, `velvet-justify-around`
- Alignment: `velvet-align-center`, `velvet-align-start`, `velvet-align-end`
- Spacing: `velvet-gap-sm`, `velvet-gap`, `velvet-gap-lg`
- Grid: `velvet-grid`

### Animation
- `velvet-animate-in`, `velvet-animate-out` 

## Browser Support

Velvet supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.