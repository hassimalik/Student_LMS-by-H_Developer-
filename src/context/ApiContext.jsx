import { createContext, useContext, useState } from "react";

export const ApiContext = createContext();

export function ApiContextProvider({ children }) {
    const [playListData, setPlayListData] = useState(null);
    const [playlistID, setPlayListId] = useState(null);
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

    async function fetchPlaylistURL(id = playlistID) {
        try {
            if (!id) return;
            const res = await fetch(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&maxResults=50&key=${API_KEY}`
            );
            const data = await res.json();
            setPlayListData(data.items || []); // save data in state
            return data.items;
        } catch (error) {
            console.error("Failed to fetch playlist:", error);
        }
    }

    return (
        <ApiContext.Provider
            value={{ playListData, setPlayListData, playlistID, setPlayListId, fetchPlaylistURL }}
        >
            {children}
        </ApiContext.Provider>
    );
}

export const useApi = () => useContext(ApiContext);
