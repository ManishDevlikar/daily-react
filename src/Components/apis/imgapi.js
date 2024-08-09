const API_KEY='tByCsCxQrNXZds79apjKpdMWMBMl-nXrlYEtHKUlYgo';
const API_URL='https://api.unsplash.com/photos';

export default async function fetchPhotos() {
    try{
        const response = await fetch(`${API_URL}?per_page=5`, {
            headers:{
                Authorization: `Client-ID ${API_KEY}`
            }
    });
    if(!response.ok){
        throw new Error('Failed to fetch photos');
    }    
    return await response.json();
    }catch(err){
        console.log('Error fetching photos',err);
        return [];
    }
}