const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;


app.use(cors());
app.use(express.json());  


const dbName = 'HeartInTheGame';
const mongoUri = `${process.env.MONGO_CONNECTION_STRING}/${dbName}`;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`MongoDB connected to ${dbName}`))
    .catch(err => {
        console.error("MongoDB connection failed:", err.message);
        process.exit(1); 
    });

// Define Event model
const eventSchema = new mongoose.Schema({
    eventId: { type: String, required: true },
    name: { type: String, required: true },
    sponsor: String,
    location: String,
    dateTime: String,
    volunteersCount: { type: Number, required: true },
    ekg: { type: Number, required: true },
});

const Event = mongoose.model('Event', eventSchema);


app.post('/api/app_submit', async (req, res) => {
    const { eventId, name, sponsor, location, dateTime, volunteersCount, ekg } = req.body;

    const newEvent = new Event({
        eventId,
        name,
        sponsor,
        location,
        dateTime,
        volunteersCount: parseFloat(volunteersCount),
        ekg: parseFloat(ekg),
    });

    try {
        console.log("second_time");
        console.log(newEvent); 
        newEvent.save();
        
        return res.status(201).json({ message: "Event added successfully!" });
    } catch (error) {
        console.error("Error saving event:", error.message);
        return res.status(500).json({ error: "Failed to add the event. Please try again." });
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
