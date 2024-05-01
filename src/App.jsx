import './App.css';
import youtube from '/img1.jpg'
import instagram from '/img2.jpg'
import profile from '/img3.jpg'
import background from '/background.jpg'
function App() {
  return (
    <div>
      <img className='background' src={background} />
      <div className='main_div'>

        <div >
          <img id="imagePreview" src={profile} alt="" />
        </div>

        <h1>flax</h1>

        <h3>hy ! i'am Kunal Thakur Aka flax</h3>

        <div className='button_accounts'>
          <a href="https://www.youtube.com/@_.flaxxe__" target="_blank" rel="noopener noreferrer">
            <button className="button-85" >YouTube</button>
          </a>
          <a href="https://www.instagram.com/the_flaxwinger/?igsh=MWJyZWdvNXMyN3QwNQ%3D%3D" target="_blank" rel="noopener noreferrer">
            <button className="button-85" >Instagram</button>
          </a>
        </div>

        <div class="main-box-container">
          <div class="box-container">
            <img className='cardImg' src={youtube} />
            <h5>flax youtube channel</h5>
            <p>
              To watch my blogs click on below
            </p>
            <a href="https://www.youtube.com/@_.flaxxe__" target="_blank" rel="noopener noreferrer">
              <h6 className="button-85" >YouTube</h6>
            </a>
          </div>
        </div>


        <div class="main-box-container">
          <div class="box-container">
            <img className='cardImg' src={instagram} />
            <h4>Instagram</h4>
            <p>To watch my content</p>
            <a href="https://www.instagram.com/the_flaxwinger/?igsh=MWJyZWdvNXMyN3QwNQ%3D%3D" target="_blank" rel="noopener noreferrer">
              <h6 className="button-85" >Instagram</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
