import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import { Fragment } from "react";
import { create } from "zustand";

config.autoAddCss = false;

export const useTrackerStore = create(set => ({
    searchTerm: "",
    sortBy: "set",
    setSearchTerm: (searchTerm) => set(state => ({ searchTerm: searchTerm})),
    setSortBy: (sortBy) => set(state => ({ sortBy: sortBy})),
}));

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
