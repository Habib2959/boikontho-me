import { baseUrl } from "../baseUrl";

export const login = async (username: string, password: string) => {
    const res = await fetch(`${baseUrl}/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            username,
            password
        })
    });
    let data = await res.json();

    if (res.ok) {
        localStorage.setItem("token", JSON.stringify(data.token));
        const userNameGet = await fetch(`${baseUrl}/profile/`, {
            method: 'GET',
            headers: { Authorization: `Token ${data.token}` }
        });
        const userName = await userNameGet.json();
        localStorage.setItem('user', JSON.stringify(userName.first_name))
        return data;
    } else {
        localStorage.clear();
        throw data
    }
}