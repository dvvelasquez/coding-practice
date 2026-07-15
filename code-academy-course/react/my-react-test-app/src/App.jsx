import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './styles/tailwind.css'

// Pages
import Challenges from './pages/challenge';
import Home from './pages/home';
import Hooks from './pages/hooks';
import DisplayTodoList from './pages/todoList';
import TheUseEffect from './pages/use-effect';
import Fetch from './pages/fetch';
import StylingComponents from './pages/styling';
import ReactForms from './pages/Forms';
import TailWindPage from './pages/tailwind';

function App() {
    return (
        <div className='main'>
            {/* Main Nav */}
            <NavBar />
            <Routes>
                <Route path="/" element={<Home name="This P tag is Props Name passed inside Home function" />} />
                <Route path="/challenge" element={<Challenges />} />
                <Route path="/hooks" element={<Hooks />} />
                <Route path="/todoList" element={<DisplayTodoList />} />
                <Route path="/use-effect" element={<TheUseEffect />} />
                <Route path="/fetch" element={<Fetch />} />
                <Route path="/styling" element={<StylingComponents />} />
                <Route path="/forms" element={<ReactForms pageTitle="Forms With React" />} />
                <Route path="/tailwind" element={<TailWindPage />} />
            </Routes>
        </div>
    )
}

export default App;
