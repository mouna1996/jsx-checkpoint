import './App.css';
import './style.css';
function App() {
  return (
    <div className="App">
     <div style={{border: 'solid 1px black', maxWidth: '100vw', }}>
      <h1 className="title red">hello</h1>
      <br />
      <img src="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Perfect-Sunset-Nature-Background-Image.jpeg" />
      <br />
      <img src="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/napavalley/Chappellet_Vineyard_Sunset_in_Fall_42eaa7cf-a1f1-4f6b-a260-b6890a6762db.jpg" />
    </div>
    <video width={320} height={240} controls>
      <source src="" type="video/mp4" />
    </video>
    </div>
   
  
  );
}

export default App;
