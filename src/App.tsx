import { Router } from "./routes"
import { GlobalStyle } from "./styles/globalStyle"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';


function App() {
  return (
    <>
      <GlobalStyle />
      <Router/>

      <ToastContainer
      position='bottom-right'
      autoClose={1200}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='colored'
    />
    </>
  )
}

export default App
