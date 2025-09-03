import { createContext, useContext, useState } from "react";

export const ApiContext = createContext();

export function ApiContextProvider({ children }) {
    const [playListData, setPlayListData] = useState(null);
    const [playlistID , setPlayListId] = useState();
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    async function fetchPlaylistURL() {
        try {
            const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistID}&maxResults=50&key=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setPlayListData(data)
            return data
        } catch (error) {
            console.log(error);            
        }

    }
    return (
        <ApiContext.Provider value={{playListData , setPlayListData , playlistID , setPlayListId , fetchPlaylistURL}} >
            {children}
        </ApiContext.Provider>
    )
}

export const useApi = () => useContext(ApiContext);