export const apiKey = 'GSRZMOAcHnyhox04xpGgXunlct0ZYk2Y61nFGzHVtsBcMO1Xo0zGGPf27lPMTtW5IPkfHcuot5MR5IiYjpwufumUb_MbvylkzYSlw4x3msAr64woXJOe5NAwDzIQXnYx';

function Yelp(term, location, sortBy) {

    return (
        fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&          sort_by=${sortBy}`, { headers: { Authorization: `Bearer ${apiKey}` } })
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }));
                }
            })
    );
}



export default Yelp;