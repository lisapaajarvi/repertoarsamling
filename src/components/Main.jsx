import { useContext } from "react";
import SongItem from "./SongItem";
import { SongContext } from "../contexts/songContext";

const Main = () => {
    const { songs } = useContext(SongContext);
    const handleClick = () => {
        
    }
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
                        return <div key={index} className="bg-white even:bg-gray-200 flex my-2 p-2" onClick={(e)=> handleClick(e)}>
                            <SongItem song={song}/>
                        </div>
                    })}
                </section>
                
            </div>
        </main>
    )
}

export default Main;