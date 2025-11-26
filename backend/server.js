// server.js
// Backend Node.js avec Express, CORS et PostgreSQL

const express = require("express");       // Framework web
const cors = require("cors");             // Gestion CORS
const { Pool } = require("pg");           // Client PostgreSQL

const app = express();
const PORT = process.env.PORT || 3000;   // Port configurable

// Middleware pour parser le JSON
app.use(express.json());

// Configuration de la base de données
const pool = new Pool({
  host: process.env.DB_HOST || "db",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "admin",
  password: process.env.DB_PASSWORD || "secret",
  database: process.env.DB_NAME || "mydb",
});

// Middleware CORS : autorise les requêtes cross-origin
app.use(cors({
  origin: [
    'http://localhost:8080',  // Frontend via port hôte
    'http://127.0.0.1:8080',  // Alternative localhost
    'http://localhost:*',      // Tous ports localhost (DEV seulement)
    'http://backend'           // Nom service Docker (tests internes)
  ],
  methods: ['GET', 'POST', 'OPTIONS'],   // Méthodes HTTP autorisées
  allowedHeaders: ['Content-Type']       // Headers autorisés
}));

// Route API principale
app.get("/api", (req, res) => {
  res.json({
    message: "Hello from Backend!",
    timestamp: new Date().toISOString(),
    client: req.get('Origin') || 'unknown',
    success: true
  });
});

// Route pour récupérer les données de la base
app.get("/db", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json({
      message: "Data from Database",
      data: result.rows,
      timestamp: new Date().toISOString(),
      success: true
    });
  } catch (err) {
    res.status(500).json({
      message: "Database error",
      error: err.message,
      success: false
    });
  }
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api`);
  console.log(`DB endpoint: http://localhost:${PORT}/db`);
  console.log("CI Test: backend updated");
  console.log("CI Test: backend updated(V2)");

});

