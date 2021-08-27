import s from './App.module.scss';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {Footer} from "./components/footer/Footer";
import {Knows} from "./components/knows/Knows";

function App() {
    return (
        <div className={s.app}>
            <Header/>
            <Main/>
            <Skills/>
            <Knows/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default App;
