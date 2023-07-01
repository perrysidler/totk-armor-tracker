import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html className="h-full" lang="en">
            <Head>
                <meta name="description"
                      content="Track which armors you have, how many of materials you need to upgrade them, and use the direct wiki links to learn more about the armor in Tears of the Kingdom."
                      key="desc"
                />
                <link rel="shortcut icon" href="/favicon.png" />
                <link rel="apple-touch-icon" href="/favicon.png" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <body className="h-full">
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}
