"use client";

import { checkout } from "@/actions/checkout";
import React from "react";
import { PricingTier } from "../page";

export default function checkoutButton({ tier }: { tier: PricingTier }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 transition duration-200 text-white px-4 py-2 rounded-b-md"
      onClick={async () => {
        await checkout(tier).then((url) => {
          window.location.href = url;
        });
      }}
    >
      Pesan Sekarang
    </button>
  );
}
