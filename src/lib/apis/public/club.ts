import { baseUrl } from "../baseUrl";

export const club = async (name: string, club_name: string, mobile: string, email: string, institution: string, website: string) => {
  const res = await fetch(`${baseUrl}/club/`, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({
      name,
      club_name,
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