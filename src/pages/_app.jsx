import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import { Fragment } from "react";

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
    return (
        <Fragment>
            <Head>
                <title>TOTK Armor Tracker</title>
            </Head>
            <Component {...pageProps} />
        </Fragment>
    );
}
