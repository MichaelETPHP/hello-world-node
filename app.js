const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const homePage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gebeta LMS</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:wght@300;400;600;700&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'IBM Plex Sans', sans-serif;
      background: #000000;
      color: #ffffff;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* NAV */
    nav {
      padding: 20px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #1a1a1a;
    }

    .brand {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 3px;
      color: #fff;
      text-decoration: none;
    }

    .brand span { color: #555; }

    /* HERO */
    .hero {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 80px 40px;
      text-align: center;
    }

    .hero-inner { max-width: 560px; }

    .tag {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: #555;
      margin-bottom: 24px;
    }

    h1 {
      font-size: 52px;
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: 24px;
      letter-spacing: -1px;
    }

    h1 span { color: #444; }

    p {
      font-size: 17px;
      color: #666;
      line-height: 1.7;
      margin-bottom: 48px;
    }

    .btn-group {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      padding: 14px 32px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      letter-spacing: 0.5px;
      transition: all 0.2s;
      font-family: 'IBM Plex Sans', sans-serif;
    }

    .btn-white {
      background: #fff;
      color: #000;
    }

    .btn-white:hover { background: #ddd; }

    .btn-outline {
      background: transparent;
      color: #fff;
      border: 1px solid #333;
    }

    .btn-outline:hover { border-color: #fff; }

    /* FOOTER */
    footer {
      padding: 24px 40px;
      border-top: 1px solid #1a1a1a;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
    }

    .footer-left {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      color: #444;
      letter-spacing: 1px;
    }

    .footer-links {
      display: flex;
      gap: 24px;
    }

    .footer-links a {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      color: #555;
      text-decoration: none;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: color 0.2s;
    }

    .footer-links a:hover { color: #fff; }

    .footer-links a.docs-link {
      color: #fff;
      border-bottom: 1px solid #333;
      padding-bottom: 2px;
    }

    .footer-links a.docs-link:hover { border-color: #fff; }
  </style>
</head>
<body>

  <nav>
    <a href="/" class="brand">GEBETA<span>LMS</span></a>
    <span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:#444;letter-spacing:2px;">v1.0.0</span>
  </nav>

  <div class="hero">
    <div class="hero-inner">
      <div class="tag">Learning Management System</div>
      <h1>Welcome to<br><span>Gebeta</span> LMS</h1>
      <p>Your modern platform for learning,<br>teaching and growing together.</p>
      <div class="btn-group">
        <a href="#" class="btn btn-white">Get Started</a>
        <a href="/docs" class="btn btn-outline">Documentation →</a>
      </div>
    </div>
  </div>

  <footer>
    <div class="footer-left">© 2026 GEBETA LMS · ALL RIGHTS RESERVED</div>
    <div class="footer-links">
      <a href="#">About</a>
      <a href="#">Support</a>
      <a href="/docs" class="docs-link">Documentation</a>
    </div>
  </footer>

</body>
</html>
`;

const server = http.createServer((req, res) => {

  // Route: /docs → serve docs.html
  if (req.url === '/docs' || req.url === '/docs/') {
    const docsPath = path.join(__dirname, 'docs.html');
    fs.readFile(docsPath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Documentation file not found');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
    return;
  }

  // Route: / → serve home page
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(homePage);
});