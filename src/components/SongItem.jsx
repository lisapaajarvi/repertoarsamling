const SongItem = ({song}) => {
    return(
        <>
            <h3>{song.title}</h3>
            <p>{song.composer}</p>
            <p>{song.origin}</p>
            <p>{song.start}</p>
            <p>{song.length}</p>
        </>
    )
}

export default SongItem