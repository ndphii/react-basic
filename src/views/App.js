//import logo from './logo.svg';
import '../styles/App.scss';
import Designform from './Example/designForm.js';
//import MyComponents from './Example/MyComponents.js';


function App() {

  //funtion components

  return (

    <div className="App">

      <header className="App-header">
        <Designform />
        {/* khi nào cần dùng thì tắt commnet <MyComponents /> */}
      </header>
    </div>
  );
}

export default App;
// export default chỉ gọi đc một fun
