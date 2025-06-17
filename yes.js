const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/badges', async (req, res) => {
    const userId = req.query.userId;
    const limit = req.query.limit || 10;

    const robloxUrl = `https://badges.roblox.com/v1/users/${userId}/badges?limit=${limit}&sortOrder=Desc`;

    try {
        const response = await fetch(robloxUrl);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch from Roblox" });
    }
});

app.listen(3000, () => {
    console.log('Proxy server running on http://localhost:3000');
});
