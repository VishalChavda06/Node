# Node.js Learning Project

A comprehensive Node.js learning project that covers fundamental concepts from basic HTTP servers to full-stack applications with Express.js and EJS templating.

## 📁 Project Structure

```
Node/
├── L-1/          # Basic HTTP Server
├── L-2/          # File System & HTML Serving
├── L-3/          # Express.js Introduction
├── L-4/          # Form Handling & Data Management
├── L-5/          # Complete CRUD Application
└── README.md
```

## 🚀 Lessons Overview

### L-1: Basic HTTP Server
**Files:** `Index.js`
- **Concepts:** Core HTTP module, server creation
- **Features:** Simple HTTP server responding with "Hello Welcome to Node.js"
- **Port:** 9090

```bash
cd L-1
node Index.js
```

### L-2: File System & HTML Serving
**Files:** `Index.js`, `Index.html`, `Home.html`
- **Concepts:** File system operations, serving static HTML files
- **Features:** Route-based HTML file serving
- **Port:** 9090

```bash
cd L-2
node Index.js
```

### L-3: Express.js Introduction
**Files:** `Index.js`, `views/Index.ejs`, `views/Home.ejs`
- **Concepts:** Express.js framework, EJS templating
- **Features:** Express routing, view engine setup
- **Port:** 4050

```bash
cd L-3
npm install
node Index.js
```

### L-4: Form Handling & Data Management
**Files:** `index.js`, `views/index.ejs`, `views/form.ejs`
- **Concepts:** Form processing, data persistence, environment variables
- **Features:** Student data management with add functionality
- **Port:** 3000 (configurable via .env)

```bash
cd L-4
npm install
node index.js
```

### L-5: Complete CRUD Application
**Files:** `Index.js`, `views/form.ejs`, `views/Home.ejs`, `views/Index.ejs`
- **Concepts:** Full CRUD operations, data management
- **Features:** Student management with add, view, edit, delete operations
- **Port:** 3000 (configurable via .env)

```bash
cd L-5
npm install
npm start
```

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **EJS** - Embedded JavaScript templating
- **dotenv** - Environment variable management
- **nodemon** - Development server with auto-reload

## 📦 Dependencies

### L-3
```json
{
  "dependencies": {
    "ejs": "^3.1.10",
    "express": "^5.1.0"
  }
}
```

### L-4
```json
{
  "dependencies": {
    "dotenv": "^17.2.1",
    "ejs": "^3.1.10",
    "express": "^5.1.0"
  }
}
```

### L-5
```json
{
  "dependencies": {
    "dotenv": "^17.2.1",
    "ejs": "^3.1.10",
    "express": "^5.1.0",
    "nodemon": "^3.1.10"
  },
  "type": "module",
  "scripts": {
    "start": "nodemon index.js"
  }
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd Node
```

2. **Navigate to specific lesson**
```bash
cd L-5  # or any lesson you want to run
```

3. **Install dependencies** (for L-3, L-4, L-5)
```bash
npm install
```

4. **Run the application**
```bash
# For L-1, L-2
node Index.js

# For L-3
node Index.js

# For L-4
node index.js

# For L-5
npm start
```

## 🌐 Available Routes

### L-1
- `GET /` - Returns "Hello Welcome to Node.js"

### L-2
- `GET /` - Serves Index.html
- `GET /home` - Serves Home.html

### L-3
- `GET /` - Renders Index.ejs
- `GET /home` - Renders Home.ejs

### L-4
- `GET /` - Renders index.ejs with student data
- `GET /form` - Renders form.ejs with student data
- `POST /addstudent` - Adds new student and redirects to form

### L-5
- `GET /` - Renders index.ejs
- `GET /home` - Renders home.ejs
- `GET /form` - Renders form.ejs with student list
- `POST /insetStudent` - Adds new student and redirects to form
- `GET /deleteStudent/:id` - Deletes student by ID
- `GET /editStudent/:id` - Edit student by ID

## 📝 Environment Variables

For L-4 and L-5, create a `.env` file in the respective directory:

```env
PORT=3000
```

## 🔧 Development

### Auto-reload (L-5)
L-5 uses nodemon for automatic server restart on file changes:
```bash
npm start
```

### Manual restart
For other lessons, manually restart the server after changes:
```bash
node Index.js
```

## 📚 Learning Path

1. **L-1**: Understand basic HTTP server creation
2. **L-2**: Learn file system operations and serving static files
3. **L-3**: Introduction to Express.js and EJS templating
4. **L-4**: Form handling and basic data management
5. **L-5**: Complete CRUD application with full functionality

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   - Change the port in the respective lesson's file
   - Or kill the process using the port

2. **Module not found**
   - Run `npm install` in the lesson directory
   - Check if all dependencies are listed in package.json

3. **EJS template errors**
   - Check for proper EJS syntax (`<% %>`, `<%= %>`)
   - Ensure all variables are passed to templates

### Debug Mode
For detailed error information, check the console output when starting the server.

## 📄 License

This project is for educational purposes.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Happy Learning! 🎉**
