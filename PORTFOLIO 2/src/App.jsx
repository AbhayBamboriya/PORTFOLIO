import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import SideBar from './Components/SideBar/SideBar';
import Test from './Test';
import './app.scss'
const App = () => {
  return <div>
      <SideBar/>
      <section id="HomePage">
        <Navbar/>
        <Hero/>
      </section>
      <section id="Parallex">Parallax</section>
      <section id="Services">Services</section>
      <section >Psrallex</section>
      <section id="Portfolio">Portfolio</section>
      <section id='Contact'>Contact</section>
      {/* <h1 className='text-cen ter'>Abhay</h1> */}
      {/* <Test/> */}
  </div>;
};

export default App;
