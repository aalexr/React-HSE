import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' component={Header} />

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

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login/' component={Login} />
          <Route exact path='/projects/' component={Projects} />
          <Route exact path='/projects/tasks/' component={Tasks} />
          <Route path='/projects/tasks/new/' component={New} />
          <Route path='/projects/:projectId/' component={SpecificProject} />

          {/* <Redirect to='/' /> */}
          <Route>
            <div>404</div>
          </Route>
        </Switch>
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
      <Link to='/new/path/'>new path</Link>
      <Route path='/new/path/'>NEW PATH</Route>
    </div>
  )
}

const SpecificProject = ({ match }) => {
  const projectId = match.params.projectId

  return (
    <div>
      <h2>Specific Project {projectId}</h2>
    </div>
  )
}
