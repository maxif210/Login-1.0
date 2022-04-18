import { useState, createContext } from 'react';

import { getPhotosByKeyword } from '../helpers/endpoints';
import { getPhotos } from './../helpers/endpoints';

const GeneralContext = createContext();



const GeneralProvider = ({children}) => {

    const [photos, setPhotos] = useState([]);
    const [search, setSearch] = useState("");
    const [datos, setDatos] = useState([]);
    const [isSearch, setIsSearch] = useState(false)

    

    const resApi = async () => {
        const data = await getPhotos();
        setPhotos(data);
      };

    const resSearchApi = async() => {
        const response = await getPhotosByKeyword(search)
        setDatos(response);
      }

    
    return (
        <GeneralContext.Provider
            value={{
                photos,
                setPhotos,
                search,
                setSearch,
                datos,
                setDatos,
                resApi,
                resSearchApi,
                isSearch,
                setIsSearch
            }}
        >
            {children}
        </GeneralContext.Provider>
    )
}

export {
    GeneralProvider
}

export default GeneralContext;