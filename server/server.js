require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

// Configure CORS
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  "https://admin-pannal-rzfc.vercel.app",
  "https://admin-pannal-ic3u.vercel.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`CORS blocked for origin: ${origin}`);
      callback(new Error("Not allowed by CORS"), false);
    }
  },
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true,
  optionsSuccessStatus: 200,
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options("*", cors(corsOptions));

app.use(express.json());

// Routes
app.use("/api/auth", require("./router/auth-router"));
app.use("/api/form", require("./router/contact-router"));
app.use("/api/data", require("./router/service-router"));
app.use("/api/admin", require("./router/admin-router"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Allowed origins: ${allowedOrigins.join(", ")}`);
});
