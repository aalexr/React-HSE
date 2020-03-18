import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Header} />

        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login/'>Login</Link>
          </li>
          <li>
            <Link to='/projects/'>Projects</Link>
          </li>
          <li>
            <Link to='/projects/tasks/'>Projects/Tasks</Link>
          </li>
          <li>
            <Link to='/projects/tasks/new/'>Projects/Tasks/New</Link>
          </li>
          <li>
            <Link to='/projects/1234/'>Projects/1234</Link>
          </li>
        </ul>

        <hr />

        <Route path='/' component={Home} />
        <Route path='/login/' component={Login} />
        <Route path='/projects/' component={Projects} />
        <Route path='/projects/:projectId/' component={SpecificProject} />
        <Route path='/projects/tasks/' component={Tasks} />
        <Route path='/projects/tasks/new/' component={New} />
      </div>
    </BrowserRouter>
  )
}

const Header = () => {
  return (
    <div>
      <h2>Header</h2>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
    </div>
  )
}

const Tasks = () => {
  return (
    <div>
      <h2>Tasks</h2>
    </div>
  )
}

const New = () => {
  return (
    <div>
      <h2>New task</h2>
    </div>
  )
}

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
    </div>
  )
}

const SpecificProject = () => {
  return (
    <div>
      <h2>Specific Project 4321</h2>
    </div>
  )
}
