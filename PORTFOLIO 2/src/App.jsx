import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Portfoilio from './Components/Portfolio/Portfoilio';
import Services from './Components/Services/Services';
import SideBar from './Components/SideBar/SideBar';
import Cursor from './Components/cursor/Cursor';
import Parallex from './Components/parallex/Parallex';
// import Test from './Test';
import './app.scss'
const App = () => {
  return <div>
      <Cursor/>
      <SideBar/>
      <section id="HomePage">
        <Navbar/>
        <Hero/>
      </section>
      <section id="Parallex"><Parallex type="services"/></section>
      <section id="Services"><Services/></section>
      <section id="Portfolio"><Parallex type="portfolio"/></section>
      <Portfoilio/>
      <section id='Contact'><Contact/></section>
      {/* <h1 className='text-cen ter'>Abhay</h1> */}
      {/* <Test/> */}
  </div>;
};

export default App;
