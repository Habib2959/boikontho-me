import { baseUrl } from "../baseUrl";

export const career = async (name: string, phone: string, email: string, job_location: string, department: string, program: string, message: string) => {
  const res = await fetch(`${baseUrl}/contact-us/`, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({
      name,
      phone,
      email,
      job_location,
      department,
      program,
      message
    })
  });
  let data = await res.json();

  if (res.ok) {
    return data;
  } else {
    return data
  }
}