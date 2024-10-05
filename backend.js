process.stdin.setEncoding("utf8");
const express = require('express');
const app = express();
const path = require("path");
const portNumber = 3000;
const bodyParser = require("body-parser");
require("dotenv").config({ path: path.resolve(__dirname, '.env') })

const uri = process.env.MONGO_CONNECTION_STRING;
const databaseAndCollection = {db: "HeartInTheGame", collection:"events"};
const { MongoClient, ServerApiVersion } = require('mongodb');

/* app.use("/css_folder", express.static(__dirname + "/css_folder")); */

/* app.set("views", path.resolve(__dirname, "templates"));
app.set("view engine", "ejs"); */


app.get('/', (req, res) => {
    res.render("index");
});

app.get("/application", (request, response) => {
    response.render("application", { portNumber: portNumber } );
});

app.use(bodyParser.urlencoded({extended:false}));
app.post("/app_submit", (request, response) => {

    
    let {input_event_id, input_name, input_sponsor, input_location, input_datetime} =  request.body;
    let input_volunteer_count = parseFloat(request.body.input_volunteer_count);
    let input_ekg = parseFloat(request.body.input_ekg);

    let statusCode = 200;

    async function send_data_to_mongo() {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        try {
            console.log("got here")
            await client.connect();
            let new_event = {eventId: input_event_id, name: input_name, sponsor: input_sponsor, location: input_location, dateTime:input_datetime, volunteersCount: input_volunteer_count, ekg: input_ekg};
            await insertEvent(client, databaseAndCollection, new_event);
    
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    }

    send_data_to_mongo();

});

async function insertEvent(client, databaseAndCollection, new_event) {

    console.log(new_event);
    const result = await client.db(databaseAndCollection.db).collection(databaseAndCollection.collection).insertOne(new_event);
}