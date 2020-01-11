export const apiKey = 'GSRZMOAcHnyhox04xpGgXunlct0ZYk2Y61nFGzHVtsBcMO1Xo0zGGPf27lPMTtW5IPkfHcuot5MR5IiYjpwufumUb_MbvylkzYSlw4x3msAr64woXJOe5NAwDzIQXnYx';

function Yelp(props) {

    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { headers: {Authorization: `Bearer ${apiKey}`}})
        .then(response => response.json())
        .then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({ })
            }
        })
    }
}