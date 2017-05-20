import React from 'react'
import {Link, IndexLink} from 'react-router'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return(
            <aside className="main-sidebar">

                <section className="sidebar" style={{height: "100%"}}>

                {/*
                <div className="user-panel">
                    <div className="pull-left image">
                    <img src="/images/user.png" alt="User Image" />
                    </div>
                    <div className="pull-left info">
                      <p>Username</p>
                    </div>
                </div>
                */}

                <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                    <input type="text" name="q" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" />
                            </button>
                        </span>
                    </div>
                </form>

                <ul className="sidebar-menu">
                    <li className="header">MENU</li>
                    <li><IndexLink to="/" activeClassName="active"><i className="fa fa-home" /><span>Home</span></IndexLink></li>
                    <li><Link to="/settings" activeClassName="active"><i className="fa fa-cogs" /><span>Settings</span></Link></li>
                    <li><Link to="/users" activeClassName="active"><i className="fa fa-user" /><span>Users</span></Link></li>
                    <li><Link to="/logs" activeClassName="active"><i className="fa fa-clock-o" /><span>Logs</span></Link></li>
                </ul>
                </section>
                <div style={{height: "100%"}} />
            </aside>
        )
    }
}

export default Sidebar
