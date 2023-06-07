import { ArmorList } from "@/components/armor/ArmorList";
import { Header } from "@/components/Header";
import { Inter } from "next/font/google";
import { Fragment } from "react";

export const inter = Inter({ subsets: [ "latin" ] });

export default function Home() {
    return (
        <Fragment>
            <Header />
            <main className={`min-h-full p-6 ${inter.className}`}>
                <ArmorList />
            </main>
        </Fragment>
    );
}
