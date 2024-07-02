export async function getQuote() {
  const res = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const response = await res.json();
  if (response?.slip) {
    return response?.slip?.advice;
  }
  return "Happiness is a journey, not a destination";
}
