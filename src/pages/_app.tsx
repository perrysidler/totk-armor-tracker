import "@/styles/globals.css";
import { loadData } from "@/store/DataManagement";
import { AppProps } from "next/app";
import Head from "next/head";
import { Fragment, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(loadData, []);
    
    useEffect(() => {
        // let armorData: Armor[] = data.armors;
        // let loadedData = window.localStorage.getItem("armorData");
        //
        // if (loadedData !== null) {
        //     let loadedArmors: ArmorSaveData[] = JSON.parse(loadedData);
        //     for (let armor of armorData) {
        //         let matchedArmor = loadedArmors.find(x => x.name === armor.name);
        //         if (typeof matchedArmor !== "undefined") {
        //             armor.currentLevel = matchedArmor.currentLevel;
        //             armor.obtained = matchedArmor.obtained;
        //         }
        //     }
        //
        // } else {
        //     let saveData: ArmorSaveData[] = [];
        //     for (const armor of armorData) {
        //         saveData.push({
        //             name: armor.name,
        //             currentLevel: 0,
        //             obtained: false,
        //         } as ArmorSaveData);
        //     }
        //     window.localStorage.setItem("armorData", JSON.stringify(saveData));
        // }
        //
        // setArmors(armorData);
    }, []);

    return (
        <Fragment>
            <Head>
                <title>TOTK Armor Tracker</title>
            </Head>
            <Component {...pageProps} />
        </Fragment>
    );
}
