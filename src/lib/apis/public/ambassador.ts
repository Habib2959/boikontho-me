import { baseUrl } from "../baseUrl";

export const ambassador = async (name: string, mobile: string, email: string, institution: string, website: string) => {
  const res = await fetch(`${baseUrl}/campus-ambassador/`, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({
      name,
      mobile,
      email,
      institution,
      website
    })
  });
  let data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw data
  }
}