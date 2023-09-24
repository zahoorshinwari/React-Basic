import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos' , {
        headers: {
            Authorization: 'Client-ID 0Khq05bw-mIvLbglICpb7Mtp7ObC8X4t_oBBnebkbto'
        },
        params: {
            query: term,
        },
    });
    
    return response.data.results;
}; 

export default searchImages;