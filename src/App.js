import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
    return (
        <div className="container">
             <Header title="TODO App"/>
             <Tasks/>
        </div>
    );
}

export default App;
