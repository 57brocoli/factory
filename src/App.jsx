import { useEffect } from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import Accueil from "./Page/Accueil";
import Page from "./Page/Page";
import Initial from "./Page/Initial";
import {useDispatch, useSelector} from 'react-redux';
import { fetchPages } from "../redux/reducers/PagesReducers";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPages());
    }, [dispatch]);

    const pages = useSelector(state => state.pages.pages);

    const routes = pages.map(page => (
        <Route key={page.id} path={`/${page.name}`} element={<Page data={page} />} />
    ));
    return (
        <Router>
            <Routes>
            {pages.length === 0 ? (
                <Route path="/" element={<Initial />} />
                ) : (
                <>
                    <Route path="/" element={<Accueil />} />
                    {routes}
                </>
            )}
            </Routes>
        </Router>
    );
}

export default App
