const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data
const osuData = {
    about: "osu! is a free-to-play rhythm game developed by Dean 'peppy' Herbert. It offers multiple game modes and a vibrant community of players.",
    gameModes: [
        { mode: "osu!standard", description: "The main rhythm game mode focused on circles and sliders." },
        { mode: "osu!taiko", description: "A drumming rhythm game mode inspired by Taiko no Tatsujin." },
        { mode: "osu!catch", description: "A mode where players catch falling fruits to the rhythm." },
        { mode: "osu!mania", description: "A piano-style game mode with a focus on precision." }
    ]
};

// Routes
app.get('/api/osu', (req, res) => {
    res.json(osuData);
});

// Start server
app.listen(PORT, () => {
    console.log(`osu! API running at http://localhost:${PORT}`);
});
