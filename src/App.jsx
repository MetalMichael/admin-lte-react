import React from 'react'
import {browserHistory} from 'react-router'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
    }

    flashMessage(message) {
        var m = this.state.messages
        m.push(message)
        this.setState({messages: m, showMessage: true})
    }

    render() {
        var resp = 
            (<div>
                <Header messages={this.state.messages} />

                <Sidebar />
                
                {// Render react-router components and pass in props
                React.cloneElement(
                    this.props.children,
                    {messages: this.state.messages}
                )}

                <Footer />
            </div>)

        return(
            <div className="wrapper">
            {resp}
            </div>
        )
    }
}

export default App
