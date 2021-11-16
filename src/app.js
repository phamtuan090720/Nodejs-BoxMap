// import express
const express = require("express");
const path = require("path");
const { getCoordinates } = require('./utils/getCoordinates.js');
const app = express();
const port = 8000;
const pathPublic = path.join(__dirname, "../public");

app.use(express.static(pathPublic));
app.set("view engine", "hbs");
app.get('/', async (req, res) => {
    const { region } = req.query;
    if (region) {
        let list_location = await getCoordinates(region);
        if (list_location.length > 0) {
            list_location = list_location.map((item) => {
                return { place_name: item.place_name, region: region, lnt: item.center[0], lt: item.center[1] }
            })
        }
        res.render('index', {
            region: region,
            isHaveRegion: true,
            list_location: list_location,
            isHaveItem: list_location.length > 0 ? true : false,
            count: list_location.length
        });;

    }
    else {
        res.render('index', {
            isHaveRegion: false,
        });;

    }

});

app.listen(port, () => {
    console.log(`app run on http://localhost:8000/`);
});
