import { Fragment } from "react";

export default function AuthInput({ type, setter, placeholder, optional }) {
  const t =
    type === "password2" ? "password" : type === "username" ? "text" : type;
  return (
    <Fragment>
      <input
        type={t}
        id={type}
        name={type}
        placeholder={placeholder || type}
        onChange={(event) => setter(event.target.value)}
        required={!optional}
        style={{marginBottom: 10}}
      />
      <br />
    </Fragment>
  );
}
