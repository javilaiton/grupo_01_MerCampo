import '../assets/css/App.css';
import SideBar from './sideBar';
import MainContent from './mainContent';



function App() {
  return (
    <div className='main'>
     <div className='contenedor-main'>
        <SideBar />
        <MainContent />
     </div >
    </div>
  );
}

export default App;
