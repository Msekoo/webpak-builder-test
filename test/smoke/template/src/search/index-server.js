const React = require('react')
require('./index.less')
const logo = require('./images/search.jpeg').default
const { add } = require('../../common/utils')

 

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

module.exports = < Search />