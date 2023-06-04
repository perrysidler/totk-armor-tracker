import "@/styles/globals.css";
import { loadArmorData } from "@/store/DataManagement";
import { AppProps } from "next/app";
import Head from "next/head";
import { Fragment, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(loadArmorData, []);

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
