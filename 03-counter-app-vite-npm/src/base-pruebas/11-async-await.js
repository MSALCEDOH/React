
export const getImagen = async() => {

    try {

        const apiKey = 'Zo1KRFuvrBOPzcm2ZxeBk5PF1Bp4dSD5';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'Cant find image'
    }
    
    
    
}

 getImagen();



