import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends Component {

    state = {
        gifs:[]
    }

   

    searchGifs = ( query ) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(response => response.json())
        .then( res => { 
            this.setState({ 
                gifs: res.data.slice(0,3)
       
            })
        })
    }
    
    componentDidMount(){
        this.searchGifs()
    }
    
    render() {
        // console.log(this.state.gifs)
        return (
            <div>
                <GifSearch searchGifs={this.searchGifs}/>
                <GifList gifs={this.state.gifs}/>
                
            </div>
        )
    }
}
