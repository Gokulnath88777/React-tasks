import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import AuthProvider from './AuthProvider'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SavedProvider from './SavedProvider'
import PurchaseProvider from './PurchaseProvider';

function App() {

  return (
    <BrowserRouter>
      <SavedProvider>
        <PurchaseProvider>
          <AuthProvider>
            <Router></Router>
          </AuthProvider>
        </PurchaseProvider>
      </SavedProvider>
      <ToastContainer
        theme="dark"
        autoClose={2000}
        style={{ top: "120px" }}
      />    </BrowserRouter>

  )
}

export default App
