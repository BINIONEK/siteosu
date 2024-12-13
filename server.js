const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data (can be replaced with database)
let events = [
    { id: 1, date: '2024-01-15', name: 'osu! Winter Cup', location: 'Online', details: 'Free entry' },
    { id: 2, date: '2024-02-10', name: 'Beatmap Showcase', location: 'Tokyo, Japan', details: 'Invite only' },
    { id: 3, date: '2024-03-05', name: 'Rhythm Masters Tournament', location: 'Los Angeles, USA', details: 'Registration required' },
];

// Routes
app.get('/api/events', (req, res) => {
    res.json(events);
});

app.post('/api/events', (req, res) => {
    const newEvent = { id: events.length + 1, ...req.body };
    events.push(newEvent);
    res.status(201).json(newEvent);
});

app.delete('/api/events/:id', (req, res) => {
    const id = parseInt(req.params.id);
    events = events.filter(event => event.id !== id);
    res.status(204).send();
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
