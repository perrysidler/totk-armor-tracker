import "@/styles/globals.css";
import { ArmorSortMethod } from "@/types/Armor";
import { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import { create } from "zustand";

interface ITrackerStoreState {
    searchTerm: string,
    sortBy: ArmorSortMethod,
    setSearchTerm: (searchTerm: string) => void,
    setSortBy: (sortBy: ArmorSortMethod) => void,
}

export const useTrackerStore = create<ITrackerStoreState>(set => ({
    searchTerm: "",
    sortBy: ArmorSortMethod.Set,
    setSearchTerm: (searchTerm) => set(state => ({ searchTerm: searchTerm })),
    setSortBy: (sortBy) => set(state => ({ sortBy: sortBy })),
}));

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Head>
                <title>TOTK Armor Tracker</title>
            </Head>
            <Component {...pageProps} />
        </Fragment>
    );
}
