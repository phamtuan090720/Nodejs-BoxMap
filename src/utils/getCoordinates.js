const axios = require("axios");

const getCoordinates = (kw) => {
    const access_token = 'eyJ1IjoicGhhbXR1YW4wOTA3IiwiYSI6ImNrdzFpdDRtODAzenYyd3BkbDg1N3l2Y3QifQ.Ip2TU1DWhGY0tRxiaR4jww';
    const uri = `https://api.mapbox.com/geocoding/v5/mapbox.places/${kw}.json?access_token=pk.${access_token}`;
    // giúp tìm kiếm được các kw tiếng việt trong axios
    const url = encodeURI(uri)
    return axios.get(url).then(rs => rs.data.features).catch(err => err)
    
}
module.exports = {
    getCoordinates
}