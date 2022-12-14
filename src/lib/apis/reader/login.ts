import { baseUrl } from "../baseUrl";

export const login = async (username: string, password: string) => {
    const res = await fetch(`${baseUrl}/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            // username e mail e post hobe, just name ta username hishabe deya
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
        const user = {
            name: userName.first_name,
            role: 'reader'
        }
        localStorage.setItem('user', JSON.stringify(user))
        return data;
    } else {
        localStorage.clear();
        throw data
    }
}