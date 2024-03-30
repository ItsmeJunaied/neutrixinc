'use client'

import Banner from "./component/Banner";
import Features from "./component/Features";

export default function Home() {
  return (
    <main className="container mx-auto ">
      <Banner />
      <Features />
    </main>
  );
}
