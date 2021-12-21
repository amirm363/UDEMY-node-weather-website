const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?types=poi&access_token=pk.eyJ1IjoiYW1pcjM2MyIsImEiOiJja3d6ODhpMmcwdmJoMnRsYWowemlxZzRxIn0.OArmRMqPm7IvFg-FrVd2OQ`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.features[0].center[0] +
          " It is currently " +
          body.features[0].center[1] +
          " degress out. There is a " +
          body.features[0].center +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
