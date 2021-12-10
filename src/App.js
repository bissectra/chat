import "./colors.css";
import ChatBody from "./components/ChatBody";
import Private from "./components/Private";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginCard from "./components/LoginCard";
import SignUpCard from "./components/SignUpCard";
import Background from "./components/Landing/Background/";

export default function App() {

  return (
    <Router>
        <Routes>
          <Route path='/login' element={<Background> <LoginCard /> </Background>} />
          <Route path='/signup' element={<Background> <SignUpCard /> </Background>} />
          <Route path="/" element={<Private> <ChatBody /> </Private>} />
          <Route path="*" element={<h1>Rota não encontrada</h1>} />
        </Routes>
    </Router> 
  );
}
