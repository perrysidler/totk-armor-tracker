import "@/styles/globals.css";
import { loadData } from "@/store/DataManagement";
import { AppProps } from "next/app";
import Head from "next/head";
import { Fragment, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(loadData, []);

    return (
        <Fragment>
            <Head>
                <title>TOTK Armor Tracker</title>
            </Head>
            <Component {...pageProps} />
            <Analytics />
        </Fragment>
    );
}
