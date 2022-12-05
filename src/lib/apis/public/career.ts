import { baseUrl } from "../baseUrl";

export const career = async (formData: any) => {
  const res = await fetch(`${baseUrl}/career/`, {
    method: "POST",
    body: formData
  });
  let data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw data
  }
}