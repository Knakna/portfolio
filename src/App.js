import s from './App.module.scss';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";

function App() {
    return (
        <div className={s.app}>
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;
