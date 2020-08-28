import React, {Component} from 'react'
import { Router, Link } from '@reach/router'
import API from './API'

import RouteProjects from './RouteProjects'
import RouteAddProject from './RouteAddProject'
import RouteEditProject from './RouteEditProject'
import RouteSingleType from './RouteSingleType'

import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      types:[],
    }
  }

  componentDidMount(){
    API.getTypes().then(res => this.setState({types:res.data}))
  }

  render(){
    var {types} = this.state
    return (
      <div className="app">
          <div class="header">
            <span>Welcome Peter</span> <i class="fas fa-bars"></i>
            <ul class="menu">
              <li><Link to="projects">All Projects</Link></li>
              {
                types.map(type => <li><Link to={'/types/'+type.id}>{type.name}</Link></li>)
              }
              <li><Link to="projects/create">Add a project</Link></li>
              <li><a href="">Login</a></li>
              <li><a href="">Signup</a></li>
            </ul>
          </div>

          <Router>
            <RouteProjects path="projects" />
            <RouteSingleType path="/types/:id" />
            <RouteAddProject path="projects/create" />
            <RouteEditProject path="projects/:id/edit" />
          </Router>
        
      </div>
    );
  }
}

export default App;
