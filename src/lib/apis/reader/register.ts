import { baseUrl } from "../baseUrl";

export const register = async (name: string, email: string, username: string, password: string) => {
    const res = await fetch(`${baseUrl}/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            name,
            email,
            password,
            username
        })
    });
    let data = await res.json();

    if (res.ok) {
        localStorage.clear();
        return data;
    } else {
        localStorage.clear();
        throw data;
    }
}