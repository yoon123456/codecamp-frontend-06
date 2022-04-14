import { atom } from "recoil";

export const LoginInput = atom({
  key: "LoginInput",
  default: {
    email: "",
    password: "",
  },
});

export const LoginInputError = atom({
  key: "LoginInputError",
  default: {
    emailError: "",
    passwordError: "",
  },
});

export const isCheckState = atom({
  key: "isChecked",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
