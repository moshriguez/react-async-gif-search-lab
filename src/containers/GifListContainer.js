import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            gifList: []
        }
    }

//! api_key=EenSp0pO6mvPYvvAQghvNPpyzHTUcAYw

    handleFetch = (searchTerm) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=EenSp0pO6mvPYvvAQghvNPpyzHTUcAYw&limit=3`)
        .then(resp => resp.json())
        .then(json => {
            // const returnedGifs = json.map(item => item.images.original.url)
            this.setState({
                gifList: json.data
            })
            // console.log(json)
        })
    }

    render() {
        return (
            <div>
                <GifSearch handleFetch={this.handleFetch} />
                <GifList gifList={this.state.gifList} />
            </div>
        )
    }
}

export default GifListContainer