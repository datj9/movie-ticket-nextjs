import "../styles/globals.scss";
import Header from "../components/header";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />;
        </>
    );
}

export default wrapper.withRedux(MyApp);
