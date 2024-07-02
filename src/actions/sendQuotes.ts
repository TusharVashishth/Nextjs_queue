"use server";

import { sendEmail } from "@/config/mail";
import queueClient from "@/config/queue";
import { getQuote } from "@/fetch/quoteFetch";

export async function sendQuotes(prevState: any, formData: FormData) {
  const email = formData.get("email");
  if (email) {
    const quote = await getQuote();
    await queueClient.publishJSON({
      url: "https://30e2-59-183-65-124.ngrok-free.app/api/mail",
      body: {
        email: email,
        body: quote,
        subject: "Your unique Advice is here",
      },
      delay: 4,
    });
    return {
      status: 200,
      message: "Email sent successfully!.Please check your email.",
    };
  }

  return {
    status: 404,
    message: "Email not found",
  };
}
