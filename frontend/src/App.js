import { Container } from 'react-bootstrap';
import Login from './pages/Login.jsx';

function App() {
  return (
   <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
    <Login/>
   </Container>
  );
}

export default App;
