"use server";

import db from "@/lib/db";

export const updateProductName = async (id: number, newName: string) => {
  try {
    const result =
      await db.$queryRaw`UPDATE "Product" SET name = ${newName} WHERE index = ${id}`;
    return result;
  } catch (error: any) {
    return {
      error: error.message,
    };
  } finally {
    await db.$disconnect();
  }
};
