import React from 'react'
import {IndexLink} from 'react-router'

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return(
            <div className="content-wrapper" style={{height: "100%"}}>
                <section className="content-header" style={{height: "100%"}}>
                <h1>
                    AdminLTE
                    <small>Example AdminLTE App</small>
                </h1>
                <ol className="breadcrumb">
                    <li><IndexLink to="/"><i className="fa fa-dashboard" />Breadcrumb</IndexLink></li>
                </ol>
                </section>

                <section className="content" />
            </div>
        )
    }
}

export default Index
