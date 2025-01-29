import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.NEXT_STRIPE_SECRET_KEY);

export const POST = async (request: any) => {
  try {
    const { products } = await request.json();

    if (!products || products.length === 0) {
      return NextResponse.json({ error: "No products provided" }, { status: 400 });
    }

    // ✅ 1. Fetch active Stripe products correctly
    let activeProducts = await stripe.products.list({ active: true });
    let existingProducts = activeProducts.data; // 🔥 Fix: Access `.data`

    for (const product of products) {
      const matchedProduct = existingProducts.find(
        (stripeProduct: any) => stripeProduct.name.toLowerCase() === product.name.toLowerCase()
      );

      // ✅ 2. If product doesn't exist, create it
      if (!matchedProduct) {
        const newProduct = await stripe.products.create({
          name: product.name,
          default_price_data: {
            currency: "usd",
            unit_amount: product.price * 100,
          },
        });

        // 🔥 Fix: Fetch updated product list after adding new product
        activeProducts = await stripe.products.list({ active: true });
        existingProducts = activeProducts.data;
      }
    }

    // ✅ 3. Fetch updated product list
    activeProducts = await stripe.products.list({ active: true });
    existingProducts = activeProducts.data;
    let stripeLineItems = [];

    for (const product of products) {
      const stripeProduct = existingProducts.find(
        (stripeProduct: any) => stripeProduct.name.toLowerCase() === product.name.toLowerCase()
      );

      if (stripeProduct) {
        stripeLineItems.push({
          price: stripeProduct.default_price, // ✅ Fix: Use `default_price`
          quantity: product.quantity,
        });
      }
    }

    if (stripeLineItems.length === 0) {
      return NextResponse.json({ error: "No matching Stripe products found" }, { status: 400 });
    }

    // ✅ 4. Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      line_items: stripeLineItems,
      mode: "payment",
      success_url: `http://localhost:3000/success`,
      cancel_url: `http://localhost:3000/cancel`,
    });

    // ✅ 5. Return the correct session URL
    return NextResponse.json({ url: session.url });

  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
};
