import { METADATA } from "../constants";
import Head from "next/head";
import React from "react";

import Layout from "@/components/common/layout";
import Header from "@/components/common/header";
import ProgressIndicator from "@/components/common/progress-indicator";

const DEBOUNCE_TIME = 100;

export const isSmallScreen = (): boolean => document.body.clientWidth < 767;
export const NO_MOTION_PREFERENCE_QUERY =
  "(prefers-reduced-motion: no-preference)";

export interface IDesktop {
  isDesktop: boolean;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>
      <Layout>
        <Header />
        <ProgressIndicator />
      </Layout>
    </>
  );
}
