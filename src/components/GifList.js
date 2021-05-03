import React from 'react'

class GifList extends React.Component {
    renderList = () => {
        const list = this.props.gifList
        console.log(list)
        return list.map(item => {
            return (<li><img src={item.images.original.url} alt='' /></li>)
        })
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

export default GifList