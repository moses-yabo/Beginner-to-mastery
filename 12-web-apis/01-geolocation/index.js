//GET CURRENT POSITION
function curSuccess(pos) {
  const coords = pos.coords;

  console.log(`Latitude ${coords.latitude} `);
  console.log(`Longitude ${coords.longitude} `);
  console.log(`Within ${coords.accuracy} meters`);
}

function curError(err) {
  console.log(`Error;${err.code} - ${err.message}`);
}

const curOption = {
  enableHighAccuracy: true, // Use GPS if Available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
};

// navigator.geolocation.getCurrentPosition(curSuccess, curError, curOption);

// WATCH CURRENT POSITION
const target = {
  latitude: 40.7841452,
  longitude: -71.394839,
};
function watchSuccess(pos) {
  const coords = pos.coords;
  console.log(coords);

  if (
    target.latitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
    console.log('You have Reached your Destination');
    navigator.geolocation.clearWatch(id);
  }
}

function watchError(err) {
  console.log(`Error;${err.code} - ${err.message}`);
}

const watchOption = {
  enableHighAccuracy: true, // Use GPS if Available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
};

const id = navigator.geolocation.watchPosition(
  watchSuccess,
  watchError,
  watchOption
);
