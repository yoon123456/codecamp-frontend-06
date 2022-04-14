import { atom } from "recoil";

export const SignupInput = atom({
  key: "SignupInput",
  default: {
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
  },
});

export const SignupInputError = atom({
  key: "SignupInputError",
  default: {
    emailError: "",
    passwordError: "",
    passwordCheckError: "",
    nameError: "",
  },
});
