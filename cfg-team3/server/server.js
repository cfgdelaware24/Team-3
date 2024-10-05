const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Define Event model
const eventSchema = new mongoose.Schema({
    eventId: String,
    name: String,
    sponsor: String,
    location: String,
    dateTime: String,
    volunteersCount: Number,
    ekg: Number
});

const Event = mongoose.model('Event', eventSchema);

// API endpoint to submit event data
app.post('/api/app_submit', async (req, res) => {
    const { input_event_id, input_name, input_sponsor, input_location, input_datetime, input_volunteer_count, input_ekg } = req.body;

    const newEvent = new Event({
        eventId: input_event_id,
        name: input_name,
        sponsor: input_sponsor,
        location: input_location,
        dateTime: input_datetime,
        volunteersCount: parseFloat(input_volunteer_count),
        ekg: parseFloat(input_ekg)
    });

    try {
        await newEvent.save();
        res.status(200).json({ message: "Event added successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});