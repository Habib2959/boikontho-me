import { baseUrl } from "../baseUrl";

export const otpVerify = async (otp: string, email: string) => {
    const res = await fetch(`${baseUrl}/creator-otp-verify/`, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            otp,
            email
        })
    })

    const data = await res.json();
    if (res.ok) {
        return data
    } else {
        localStorage.clear();
        throw data
    }

}

export const otpResend = async (email: string) => {
    const res = await fetch(`${baseUrl}/creator-otp-resend/`, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            email
        })
    })

    const data = await res.json();
    if (res.ok) {
        return data
    } else {
        localStorage.clear();
        throw data
    }

}