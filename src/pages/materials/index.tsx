import { ArmorList } from "@/components/armor/ArmorList";
import { Header } from "@/components/Header";
import { inter } from "@/pages";
import { Fragment } from "react";

export default function Home() {
    return (
        <Fragment>
            <Header />
            <main className={`min-h-full p-6 ${inter.className}`}>
                <h1>This is the materials page</h1>
            </main>
        </Fragment>
    );
}