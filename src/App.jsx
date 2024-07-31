import React from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Problem from "./components/Problem";
import Explain from "./components/Explain";
function App() {
    return (
        <div className="app-container">
            <Navbar/>
            <Title/>
            <Problem/>
            {/* <Explain/> */}
        </div>
    );
}

export default App;
