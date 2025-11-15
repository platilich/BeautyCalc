# Calculator Project

This is a simple web-based calculator application.

## Setup

To run this project, you need a web server. You can use any simple HTTP server.

For example, using Python:

```bash
cd /home/plat/projects/Calculator
python -m http.server 8000
```

## Usage

Open your web browser and navigate to `http://localhost:8000` (or the port you configured).

The calculator interface will be displayed, allowing you to perform basic arithmetic operations.

### Input Methods

You can interact with the calculator using:
- **On-screen buttons**: Click the buttons directly on the calculator interface.
- **Keyboard input**: Use your keyboard to type numbers and operators. The design is inspired by iOS 26 calculator aesthetics for a familiar user experience.

## Project Structure

- `static/css/style.css`: Styles for the calculator.
- `static/js/main.js`: Main JavaScript logic for the calculator.
- `index.html`: The main HTML file for the calculator interface.
