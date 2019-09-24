import React from 'react'

export default function GifList(props) {
    console.log(props)
    
    return (
        <ul>
            {props.gifs.map( gif => <li><img key={gif.images.original.url} src={gif.images.original.url} alt=''/></li> )}
        </ul>
    )
}
