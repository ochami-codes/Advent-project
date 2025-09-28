<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Devotional Articles | Second Advent Ministries</title>
  <link rel="stylesheet" href="devotions.css" />
  <style>
    /* === Base Styles === */
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background-color: #f9f9f9;
      color: #222;
    }

    /* === Header === */
    header {
      background-color: #1c2e60;
      color: #fff;
      padding: 20px;
      text-align: center;
    }

    header h1 {
      margin: 0;
      font-size: 2rem;
    }

    .verse-highlight {
      background-color: #f4f0e6;
      color: #1c2e60;
      font-style: italic;
      text-align: center;
      padding: 10px 20px;
      margin: 0;
    }

    /* === Main === */
    main {
      padding: 30px 15px;
      max-width: 960px;
      margin: 0 auto;
    }

    h2 {
      color: #1c2e60;
    }

    .search-box {
      width: 90%;
      padding: 10px;
      margin: 20px auto;
      display: block;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }

    /* === Devotion List === */
    .devotion-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
    }

    .devotion-item-link {
      text-decoration: none;
      color: inherit;
    }

    .devotion-item {
      display: flex;
      align-items: center;
      gap: 15px;
      background: #f9f9f9;
      margin: 10px auto;
      padding: 15px;
      border-radius: 10px;
      max-width: 900px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease, background-color 0.2s ease;
      border-bottom: 1px solid #ccc;
    }

    .devotion-item:hover {
      transform: scale(1.01);
      background: #fffbe6;
    }

    .devotion-item img {
      width: 90px;
      height: 90px;
      object-fit: cover;
      border-radius: 8px;
    }

    .devotion-text {
      flex: 1;
    }

    .devotion-text h3 {
      margin: 0 0 8px;
      font-size: 18px;
      font-weight: bold;
    }

    .devotion-text p {
      margin: 0;
      font-size: 14px;
      color: #555;
    }

    /* === Footer === */
    footer {
      background-color: #1c2e60;
      color: #fff;
      text-align: center;
      padding: 15px 10px;
      font-size: 0.9rem;
      margin-top: 40px;
    }

    .footer-links a {
      color: #fff;
      margin: 0 10px;
      text-decoration: underline;
    }

    /* === Responsive === */
    @media (max-width: 600px) {
      .devotion-item {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .devotion-item img {
        width: 100%;
        height: auto;
      }
    }
    .devotion-item {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.4s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
#scrollTopBtn {
  position: fixed;
  bottom: 30px;
  right: 20px;
  z-index: 1000;
  font-size: 22px;
  border: none;
  outline: none;
  background-color: #444;
  color: white;
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 50%;
  display: none;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  transition: background-color 0.3s ease;
}

#scrollTopBtn:hover {
  background-color: #222;
}
  </style>
</head>
<body>

  <header>
    <h1>Second Advent Ministries</h1>
    <p class="verse-highlight">"Sanctify them through Thy truth: Thy word is truth." — John 17:17</p>
  </header>

  <main>
    <h2>Devotional Articles</h2>
    <p style="margin-bottom: 25px;">
      Be inspired, convicted, and drawn closer to Christ through these truth-filled devotionals, rooted in Scripture and the Spirit of Prophecy.
    </p>

    <input type="text" id="searchInput" placeholder="Search devotion titles..." class="search-box" />
    <div class="devotion-list"></div>
      <button id="scrollTopBtn" title="Go to top">↑</button>

  </main>

  <footer>
    <p>&copy; 2025 Second Advent Ministries. All rights reserved.</p>
    <div class="footer-links">
      <a href="devotionals.html">Devotion Home</a>
      <a href="contact.html">Contact</a>
    </div>
  </footer>
<script src="articles.js"></script>
</body>
</html>