import Navigation from "./components/Navigation.tsx";
import Sidebar from "./components/Sidebar.tsx";

function App() {

  return (
    <>
      <div className="w-full h-full">
          <div id="navigation" className="w-full h-full">
              <Navigation/>
          </div>
          <div id="sidebar">
              <Sidebar/>
          </div>
      </div>
    </>
  )
}

export default App
