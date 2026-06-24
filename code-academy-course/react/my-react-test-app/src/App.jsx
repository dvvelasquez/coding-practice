import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

// Pages
import ForumChallenge from './pages/challenge';
import Home from './pages/home';
import Hooks from './pages/hooks';
import DisplayTodoList from './pages/todoList';
import UseEffect from './pages/use-effect';

function App() {
    return (
        <div className='main'>
            {/* Main Nav */}
            <NavBar />
            <Routes>
                <Route path="/home" element={<Home name="This P tag is Props Name passed inside Home function" />} />
                <Route path="/challenge" element={<ForumChallenge />} />
                <Route path="/hooks" element={<Hooks />} />
                <Route path="/todoList" element={<DisplayTodoList />} />
                <Route path="/use-effect" element={<UseEffect />} />
            </Routes>
        </div>
    )
}

export default App;
