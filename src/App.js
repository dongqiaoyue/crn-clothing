import Home from './routes/home/home.component';
import Navigation from "./routes/navigation/navigation.component";
import {Route, Routes} from 'react-router-dom';
import Authentication from "./routes/authentication/authentication.component";

const Shop = () => {
    return (
        <div>
            <h1>hello world</h1>
        </div>
    );
}

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />} >
                <Route index element={<Home />}></Route>
                <Route path='shop' element={<Shop />}></Route>
                <Route path='auth' element={<Authentication />}></Route>
            </Route>
        </Routes>
    );
};

export default App;
