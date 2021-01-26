import './App.css';
import './index.css'
import Sponsors from './Components/Sponsors/Sponsors2';
import './Components/ScrollBar/scrollbar.css'
import Faq from './Components/FAQ/Faq2';
import Workshop from './Components/Workshop/Workshop'
import Footer from './Assets/footer.svg'
function App() {
  return (
    <div className="containers">
        <div class="scrollable">
        <Sponsors />
        <Faq/>
        </div>
        
        {/* <Workshop /> */}
<img src={Footer} />        </div>
  );
}

export default App;
