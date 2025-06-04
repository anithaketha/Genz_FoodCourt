import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainComponent from './Components/MainComponent';
import About from './Components/About';
import Error from './Components/Error';
import RestaurantDetail from './Components/RestaurantDetail';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainComponent/>,
    errorElement:<Error/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/restaurants/:restaurantId",
    element:<RestaurantDetail/>,
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter}/>
      {/* <MainComponent/> */}
      {/* <RestaurantDetail/> */}
    </div>
  );
}                             


export default App;
