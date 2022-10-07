import axios from 'axios';

const API_KEY = 'DnJDvU-ecz-dU2g34E5B-8-VS3-RsaAcqwz-8MgfzVtR2SZfybul34WpJmE3AeT10qs-czPHpga9GJ1JkzyQkoRmD9n_0einxl1VP7btrQAxeyW2-HU6iUhdxQE_Y3Yx'
const URL = "https://api.yelp.com/v3/businesses"

const Axios = axios.create({
  baseURL: URL,
  headers: {
    Authorization:
      `Bearer ${API_KEY}`,
  },
  params: {
    term: "restaurants",
    location: "1956 W Golfcart Lane",
    sort_by: "best_match",
    limit: 50,
  }
});

// Yelp API Endpoint Reference Site : https://www.yelp.com/developers/documentation/v3/business_search
const getYelp = (location : string , setResults : Function,) => {
  Axios.get("/search").then(response => setResults({result: response.data.businesses, error: null})).catch(error => setResults({result: null, error: error}))
}

export {getYelp};
