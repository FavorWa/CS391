import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import Navigation from './components/Navigation';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';

function Root(){
  return(
    <>
    { <Navigation/>}
    { <Routes>
      <Route path='/ComponentA' element={<ComponentA/>}/>
      <Route path='/ComponentB/*' element={<ComponentB/>}/>
    </Routes>}
    </>
  )
}
const router = createBrowserRouter([{path:"*", Component: Root},]);

function App() {
  
  return (
  <RouterProvider router={router}/>
    
  )
}

export default App
