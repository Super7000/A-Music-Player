import { useState } from "react"
import "../Style/Search-bar.css"
import { Track } from "./Track-recommendation"
import { defaultTracks } from "./Data"
import { useDispatch } from "react-redux"
import { setArtistName, setAudioName, setAudioSrc, setAudioThumbnailSrc } from "./audioReducer"

const tracks = []
for (let key in defaultTracks) {
    tracks.push(...defaultTracks[key])
}

export default function SearchBar() {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState([])

    return (
        <>
            <div className="search-bar-container">
                <img src="./Icons/music.svg" alt="music" className="music-icon" />
                <input type="text" className="search-music-input" placeholder="Search Tracks" value={searchValue} onChange={e => {
                    setSearchValue(e.target.value)
                    let newSearchResult = []
                    if (e.target.value !== "")
                        newSearchResult = tracks.filter(track => track.name.toLowerCase().includes(e.target.value.toLowerCase()))
                    setSearchResult(newSearchResult)
                }} />
            </div>
            <div className="search-result-container">
                {
                    searchResult.map((track) => {
                        return (
                            <Track
                                trackName={track.name}
                                trackDuration={track.duration}
                                trackAuthor=""
                                onClick={() => {
                                    setSearchValue("")
                                    setSearchResult([])

                                    dispatch(setAudioSrc(track.source))
                                    dispatch(setAudioName(track.name))
                                    dispatch(setArtistName("unknown"))
                                    dispatch(setAudioThumbnailSrc("./Icons/Music-icon3.jpg"))
                                }}
                                key={track.source} />
                        )
                    })
                }
            </div>
        </>
    )
}