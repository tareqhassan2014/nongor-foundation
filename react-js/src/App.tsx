import ScrollTop from 'components/ScrollTop';
import Router from 'routers';
import ThemeCustomization from 'themes';

function App() {
    return (
        <ThemeCustomization>
            <ScrollTop>
                <Router />
            </ScrollTop>
        </ThemeCustomization>
    );
}

export default App;
