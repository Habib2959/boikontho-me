export const otpVerify = async (otp:string, mobile:string) => {
    const res = await fetch("https://banana.hackules.com/kheyal/tele/otp_verify/", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            otp,
            mobile
        })
    })

    const data = await res.json();
    if (res.ok) {
        return data
    } else {
        localStorage.clear();
        return "Put a valid otp"
    }

}

export const otpResend = async (mobile:string) => {
    const res = await fetch("https://banana.hackules.com/kheyal/tele/otp_resend/", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            mobile
        })
    })

    const data = await res.json();
    if (res.ok) {
        return data
    } else {
        localStorage.clear();
        return "Failed to resend otp"
    }

}
