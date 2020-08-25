import "../styles/globals.scss";
import Header from "../components/MyHeader";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
    console.log();
    return (
        <>
            <Header />
            <Component {...pageProps} />;
        </>
    );
}

export default wrapper.withRedux(MyApp);
