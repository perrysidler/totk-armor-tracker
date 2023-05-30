import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html className="h-full" lang="en">
            <Head>
                <link rel="shortcut icon" href="/favicon.png"/>
                <link rel="apple-touch-icon" href="/favicon.png"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <body className="h-full">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
