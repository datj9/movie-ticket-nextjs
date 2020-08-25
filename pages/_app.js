import "../styles/globals.scss";
import Header from "../components/Header";
import { wrapper } from "../redux/store";
import { useDispatch } from "react-redux";
import { logOut, signIn } from "../redux/user/actions";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />;
        </>
    );
}

export default wrapper.withRedux(MyApp);
