import { useState } from "react";
import SongItem from "./SongItem";

const Main = () => {
    const songsFromApi = [{"title":"Jul jul", "composer": "H M", "origin": "Lösa noter på drive", "start": "A, C, E", "length": "1:25", "comments": "En klassiker som folk gillar!"}, {"title":"Jul jul", "composer": "H M", "origin": "Lösa noter på drive", "start": "A, C, E", "length": "1:25", "comments": "En klassiker som folk gillar!"}] 

    const [songs, setSongs] = useState(songsFromApi)

    return(
        <main className="h-[calc(100vh-6rem)] bg-emerald-100">
            <div className="container mx-auto px-4">
                <h2 className="text-lg flex justify-center">Sånger i repertoaren:</h2>
                <div className="grid grid-cols-10">
                    <p className="col-span-2">Titel</p>
                    <p className="col-span-2">Kompositör</p>
                    <p className="col-span-2">Noter</p>
                    <p>Starttoner</p>
                    <p>Längd</p>
                    <p className="col-span-2">Kommentarer</p>
                </div>
                <section>
                    {songs.map((song, index)=> {
                        return <div key={index} className="bg-white even:bg-gray-200 flex my-2">
                            <SongItem song={song}/>
                        </div>
                    })}
                </section>
                
            </div>
        </main>
    )
}

export default Main;