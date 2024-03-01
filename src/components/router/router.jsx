import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Error, Detalhes } from "../../paginas";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detalhes/:id" element={<Detalhes />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
