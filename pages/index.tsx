import { METADATA } from "../constants";
import Head from "next/head";
import React from "react";

import Layout from "@/components/common/layout";
import Header from "@/components/common/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>
      <Layout>
        <Header />
      </Layout>
    </>
  );
}
