import { useState } from "react";
import SongItem from "./SongItem";

const Main = () => {
    const songsFromApi = [{"title":"Jul jul", "composer": "H M", "origin": "Lösa noter på drive", "start": "A, C, E", "length": "1:25"}, {"title":"Jul jul", "composer": "H M", "origin": "Lösa noter på drive", "start": "A, C, E", "length": "1:25"}] 

    const [songs, setSongs] = useState(songsFromApi)

    return(
        <main className="h-[calc(100vh-6rem)] bg-emerald-100">
            <h2 className="text-lg flex justify-center">Sånger i repertoaren:</h2>
            <div className="grid grid-cols-5 gap-4">
                <p>Titel</p>
                <p>Kompositör</p>
                <p>Noter</p>
                <p>Starttoner</p>
                <p>Längd</p>
            
            {songs.map((song, index)=> {
                return <SongItem key={index} song={song}/>
            })}
            </div>
        </main>
    )
}

export default Main;