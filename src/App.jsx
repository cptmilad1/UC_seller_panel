import {BrowserRouter} from 'react-router-dom'
import Router from "./features/router/router";

const App = () => {
  return (
    <main className='bg-[url(/img1.jpeg)] bg-cover bg-center h-screen overflow-auto'>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </main>
  );
}
 
export default App;