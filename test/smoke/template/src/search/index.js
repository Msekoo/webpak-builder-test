import React, { useState }  from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import logo from './images/search.jpeg'
import { add } from '../../common/utils'

class Search extends React.Component {
    constructor () {
        super(...arguments);
        this.state = {
             Text: null
        }
    }
    loadComponent() {
        import('./text.js').then((text) => {
            this.setState({
                Text: text.default
            })
        })
    }
    render() {
        let res = add(3, 4)
        const { Text } = this.state
        return <div className="search-txt">
            <img src={logo} onClick={this.loadComponent.bind(this)}></img>
            <div className="sub-text">{res}</div>
            { Text ? <Text /> : null }
        </div>
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)