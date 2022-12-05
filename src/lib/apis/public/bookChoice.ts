import { baseUrl } from "../baseUrl";

export const bookChoice = async (name: string, notifier: string, book_list: string) => {
  const res = await fetch(`${baseUrl}/book-choices/`, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({
      name,
      notifier,
      book_list
    })
  });
  let data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw data
  }
}