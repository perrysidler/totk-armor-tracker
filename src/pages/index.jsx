import { ArmorList } from "@/components/ArmorList";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: [ "latin" ] });

export default function Home() {
    return (
        <main className={`p-8 ${inter.className}`}>
            <ArmorList />
        </main>
    );
}
