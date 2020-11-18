export default class Epic {
  static getImage(date) {
    return new Promise(function(resolve, reject)  {
      let request = new XMLHttpRequest();
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${process.env.API_KEY}`;
      request.onload = function() {
        if (this.status === 200)  {
          resolve(request.response);
        } else  {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}