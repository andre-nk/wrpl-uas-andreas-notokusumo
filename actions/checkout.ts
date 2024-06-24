"use server";

import { PricingTier } from "@/app/page";
// @ts-ignore
import midtransClient from "midtrans-client";

export async function checkout(item: PricingTier): Promise<string> {
  try {
    const orderId = Date.now().toString();

    const snap: any = new midtransClient.Snap({
      isProduction: false,
      serverKey: "SB-Mid-server-5KowVV7DDGWp0d6m6PTTQ0Uj",
    });

    const transaction = await snap.createTransaction({
      transaction_details: {
        order_id: orderId,
        gross_amount: item.price,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        id: "TEST-123",
        first_name: "Andreas",
        last_name: "Halim",
        email: "andreashalim@gmail.com",
      },
    });

    return transaction.redirect_url;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create transaction");
  }
}
