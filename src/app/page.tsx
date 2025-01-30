import React from "react";
import Navbar from "../components/navbar";

import HeroSection from "@/app/pages/HeroSection/page";
import EditorChoice from "@/app/pages/editorChoice/page";
import VitaClasic from "@/app/pages/VitaClasic/page";

import FeaturedPosts from "./pages/Featured-Posts/page";
import Footer from "@/components/Footer";

import ProductCards from "@/components/ProductCard";
export default function Home() {
  return (
    <div>
      <Navbar />

      <HeroSection />
      <EditorChoice />
      <VitaClasic />
      <FeaturedPosts />

      <ProductCards />
      <Footer />
    </div>
  );
}
