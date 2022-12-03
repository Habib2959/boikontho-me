import { baseUrl } from "../baseUrl";

export const login = async (username:string, password:string) => {
    const res = await fetch(`${baseUrl}/pub_login/`, {
        method: "POST",
        headers: {"Content-Type": "application/json; charset=UTF-8"},
        body: JSON.stringify({
            username,
            password
        })
    });
    let data = await res.json();

    if (res.ok) {
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("user", JSON.stringify(data.user.username));
        return data;
    } else {
        localStorage.clear();
        return data
    }
}