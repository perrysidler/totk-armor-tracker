import { ArmorList } from "@/components/ArmorList";
import { Sidebar } from "@/components/Sidebar";
import { Inter } from "next/font/google";
import { Fragment } from "react";

const inter = Inter({ subsets: [ "latin" ] });

export default function Home() {
    return (
        <Fragment>
            <Sidebar />
            <main className={`p-8 ml-72 min-h-full ${inter.className}`}>
                <ArmorList />
            </main>
        </Fragment>
    );
}
