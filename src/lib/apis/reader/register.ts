import { baseUrl } from "../baseUrl";

export const register = async (username: string, password: string) => {
    const res = await fetch(`${baseUrl}/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            username,
            password
        })
    });
    let data = await res.json();

    if (res.ok) {
        return data;
    } else {
        localStorage.clear();
        return data;
    }
}