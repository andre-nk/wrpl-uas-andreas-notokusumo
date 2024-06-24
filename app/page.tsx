import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CheckoutButton from "./(component)/checkoutButton";

export interface PricingTier {
  title: string;
  description: string;
  price: number;
}

const pricingTiers: PricingTier[] = [
  {
    title: "Paket Harian",
    description:
      "Akses harian ke semua fasilitas termasuk gym, kolam renang, dan kelas kebugaran.",
    price: 50000,
  },
  {
    title: "Paket Mingguan",
    description:
      "Akses selama satu minggu penuh ke semua fasilitas dan kelas kebugaran.",
    price: 200000,
  },
  {
    title: "Paket Bulanan",
    description:
      "Akses bulanan ke semua fasilitas, kelas kebugaran, dan penggunaan sauna tanpa batas.",
    price: 500000,
  },
  {
    title: "Paket 6 Bulan",
    description:
      "Akses selama 6 bulan ke semua fasilitas, kelas kebugaran, penggunaan sauna, dan konsultasi dengan pelatih pribadi.",
    price: 2700000,
  },
  {
    title: "Paket Tahunan",
    description:
      "Akses tahunan ke semua fasilitas, kelas kebugaran, penggunaan sauna, konsultasi dengan pelatih pribadi, dan diskon 10% di kafe sehat.",
    price: 5000000,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col space-y-16 justify-center items-center">
      <div className="flex flex-col justify-center items-center space-x-4">
        <h1 className="text-blue-500 font-bold text-3xl">
          Sport Center and Fitness
        </h1>
        <i>Langganan sekarang!</i>
      </div>
      <div className="w-full h-[50vh] px-24">
        <Carousel className="w-full">
          <CarouselPrevious />
          <CarouselContent>
            {pricingTiers.map((tier, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <div
                  className="flex flex-col justify-between border rounded-lg border-gray-500 hover:bg-gray-100 transition duration-200 h-[50vh]"
                  key={index}
                >
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold pb-2">{tier.title}</h2>
                      <p>{tier.description}</p>
                    </div>
                    <p className="text-xl font-bold">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(tier.price)}
                    </p>
                  </div>
                  <CheckoutButton tier={tier} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
