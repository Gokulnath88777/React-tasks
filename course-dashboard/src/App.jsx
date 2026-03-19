import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import AuthProvider from './AuthProvider'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EnrolledProvider from './EnrolledProvider';
import PurchaseProvider from './PurchaseProvider';

function App() {

  return (
    <BrowserRouter>
      <EnrolledProvider>
        <PurchaseProvider>
          <AuthProvider>
            <Router></Router>
          </AuthProvider>
        </PurchaseProvider>
      </EnrolledProvider>
      <ToastContainer
        theme="dark"
        autoClose={2000}
        style={{ top: "120px" }}
      />    </BrowserRouter>

  )
}

export default App
