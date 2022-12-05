import { baseUrl } from "../baseUrl";

export const contact = async (name: string, phone: string, email: string, message: string) => {
  const res = await fetch(`${baseUrl}/contact-us/`, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({
      name,
      phone,
      email,
      message
    })
  });
  let data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw data
  }
}