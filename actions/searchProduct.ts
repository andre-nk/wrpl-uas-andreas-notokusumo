import db from "@/lib/db";

export const getSearchProduct = async (name: string) => {
  try {
    if (name === "") {
      throw new Error("Search term cannot be empty");
    }

    var name = `%${name}%`;
    console.log(`SELECT * FROM "Product" WHERE name LIKE ${name};`);

    const result = db.product.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
    return result;
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};
