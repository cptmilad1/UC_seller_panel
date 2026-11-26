import {Routes, Route} from 'react-router-dom'
import Home from '../home/Home'

const route = [
    {path: '/', element : <Home/>},

]

function Router() {
  return (
    <div>
        <Routes>
            {route.map((r) => (
                <Route path={r.path} element={r.element} key={r.path}/>
            ))}
        </Routes>
    </div>
  )
}

export default Router