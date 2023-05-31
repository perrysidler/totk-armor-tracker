import { ArmorList } from "@/components/ArmorList";
import { Sidebar } from "@/components/Sidebar";
import { Inter } from "next/font/google";
import { Fragment } from "react";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: [ "latin" ] });

export default function Home() {
    return (
        <Fragment>
            {/*<Sidebar />*/}
            <Header />
            <main className={`min-h-full p-6 ${inter.className}`}>
                <ArmorList />
            </main>
        </Fragment>
    );
}
