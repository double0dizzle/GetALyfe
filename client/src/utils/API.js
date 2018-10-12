import axios from "axios";

export default {
 getData: function(){
     return axios.get("/api/college");
 },

matrix: function(queryUrl) {
    return axios.get(queryUrl);
 },

 info: function(queryUrl) {
    return axios.get("/api/college/info/" + queryUrl);
 }
}

// import axios from "axios";

// const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// // Export an object with a "search" method that searches the Giphy API for the passed query
// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };