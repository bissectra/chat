import { baseURL } from "../../constants";

export default async function handleGoogleLogin(googleData) {
  const res = await fetch(baseURL + "/api/v1/auth/google", {
    method: "POST",
    body: JSON.stringify({
      token: googleData.tokenId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  const { user, token } = data;
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  window.location = "/";
}
