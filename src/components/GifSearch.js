import React from 'react'

class GifSearch extends React.Component {
    constructor() {
        super()
        this.state = {
            searchTerm: ''
        }
    }

    handleChange = (value) => {
        console.log(value)
        this.setState({
            searchTerm: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleFetch(this.state.searchTerm)
        e.target.reset() //? needs to change - not working
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                name='search' 
                value={this.state.searchTerm}
                placeholder='Enter search term...'
                onChange={(e) => this.handleChange(e.target.value)} />
            </form>
        )
    }
}

export default GifSearch