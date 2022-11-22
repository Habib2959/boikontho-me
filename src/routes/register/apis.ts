export const register = async (username:string, password:string) => {
    const res = await fetch("https://banana.hackules.com/kheyal/tele/register/", {
        method: "POST",
        headers: {"Content-Type": "application/json; charset=UTF-8"},
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
        return "There is an error"
    }
}