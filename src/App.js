import React from "react";
import ProjectContainer from "./components/Project/ProjectContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

// const App = () => <PortfolioContainer />;

// export default App;
function App() {
    return (
        <div>
            <Header />
            <div>
                <ProjectContainer></ProjectContainer>
            </div>
            <Footer />
        </div>
    );
}
export default App;