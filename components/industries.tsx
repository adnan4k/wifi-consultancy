'use client';

import React from 'react';
import { Plane, TrendingUp, ShoppingCart, Landmark, Lightbulb, Truck } from 'lucide-react';

const industries = [
  {
    title: "Travel and Aviation Consulting",
    description: "Company that offers design and build services for you from initial sketches to the final production.",
    icon: Plane,
  },
  {
    title: "Business Services Consulting",
    description: "We consider all the drivers of change - from the ground up and we'll motivate and support you to make the change.",
    icon: TrendingUp,
  },
  {
    title: "Consumer Products Consulting",
    description: "Design repeatable growth models and innovation pipelines that generate new products with higher potential and lower risks of failure.",
    icon: ShoppingCart,
  },
  {
    title: "Financial Services Consulting",
    description: "We work buy-side and sell-side and give our clients hard-hitting and objective answers and focus hard on the best opportunities.",
    icon: Landmark,
  },
  {
    title: "Energy and Environment Consulting",
    description: "We work across all the major geographies, meaning we understand the underlying drivers in construction markets.",
    icon: Lightbulb,
  },
  {
    title: "Surface Transport & Logistics Consulting",
    description: "Scheduled transport operations, from broad market trends and strategy to the development of integrated commercial strategies.",
    icon: Truck,
  },
];

const HexagonIcon = ({ Icon }: { Icon: any }) => (
  <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 w-full h-full fill-white stroke-[#1a365d] stroke-[3]"
    >
      <path d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z" />
    </svg>
    <Icon className="relative z-10 w-7 h-7 text-[#1a365d]" strokeWidth={1.5} />
  </div>
);

export function Industries() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-[#0f172a] mb-6 tracking-tight">
            industries
          </h2>
          <div className="w-12 h-1.5 bg-[#fbbf24] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {industries.map((industry, index) => (
            <div key={index} className="flex gap-6 items-start group">
              <HexagonIcon Icon={industry.icon} />
              <div className="space-y-4 pt-1">
                <h3 className="text-xl font-bold text-[#0f172a] leading-tight group-hover:text-primary transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
