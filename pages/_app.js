import "../styles/globals.scss";
import Header from "../components/Header";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />;
        </>
    );
}

export default wrapper.withRedux(MyApp);
