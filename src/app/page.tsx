import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ProductCategories from "@/components/home/ProductCategories";
import BestSellers from "@/components/home/BestSellers";
import InstantQuotation from "@/components/home/InstantQuotation";
import VideoShowcase from "@/components/home/VideoShowcase";
import CommitmentSection from "@/components/home/CommitmentSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import RecentWorkSection from "@/components/home/RecentWorkSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ServiceAreaBlogSection from "@/components/home/ServiceAreaBlogSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Product Categories (Every window, covered) */}
      <ProductCategories />

      {/* Bestsellers Tab System (Curtains & Blinds with image toggles) */}
      <BestSellers />

      {/* Instant Quotation Banner Section */}
      <InstantQuotation />

      <VideoShowcase />
      <CommitmentSection />
      <HowItWorksSection />
      <RecentWorkSection />
      <TestimonialsSection />
      <ServiceAreaBlogSection />
    </main>
  );
}