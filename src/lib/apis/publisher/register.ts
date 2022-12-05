import { baseUrl } from "../baseUrl";

export const register = async (name: string, email: string, username: string, password: string) => {
    const res = await fetch(`${baseUrl}/pub-register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            name,
            email,
            username,
            password
        })
    });
    let data = await res.json();

    if (res.ok) {
        return data;
    } else {
        localStorage.clear();
        throw data;
    }
}