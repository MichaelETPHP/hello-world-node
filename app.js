const http = require('http');

const port = process.env.PORT || 3000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gebeta LMS</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: #0A1628;
      color: #ffffff;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .container {
      text-align: center;
      padding: 60px 40px;
      border: 2px solid #F4A623;
      border-radius: 16px;
      max-width: 500px;
      width: 90%;
    }

    .logo {
      font-size: 48px;
      font-weight: 800;
      color: #F4A623;
      letter-spacing: 2px;
      margin-bottom: 8px;
    }

    .logo span {
      color: #ffffff;
    }

    .tagline {
      font-size: 14px;
      color: #F4A623;
      letter-spacing: 4px;
      text-transform: uppercase;
      margin-bottom: 40px;
    }

    h1 {
      font-size: 28px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 16px;
      line-height: 1.4;
    }

    p {
      font-size: 16px;
      color: #aaaaaa;
      line-height: 1.7;
      margin-bottom: 40px;
    }

    .btn {
      display: inline-block;
      background-color: #F4A623;
      color: #0A1628;
      padding: 14px 40px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 700;
      text-decoration: none;
      letter-spacing: 1px;
    }

    .footer {
      margin-top: 40px;
      font-size: 12px;
      color: #555555;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">GEBETA<span>LMS</span></div>
    <div class="tagline">Learning Management System</div>
    <h1>Welcome to Gebeta LMS</h1>
    <p>Your modern platform for learning,<br>teaching and growing together.</p>
    <a class="btn" href="#">Get Started</a>
    <div class="footer">© 2026 Gebeta LMS · All rights reserved</div>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});