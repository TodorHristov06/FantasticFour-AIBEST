import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import * as Components from "../components/loginComponents";
import "../localization/i18n.js"; // Актуализиран път към i18n.js
import LanguageSelector from "../components/LanguageSelector";

const Login = ({ onLogin }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showValidation, setShowValidation] = useState(false);

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return {
      minLength: password.length >= minLength,
      hasUpperCase,
      hasLowerCase,
      hasNumber,
      hasSpecialChar,
    };
  };

  const isPasswordValid = (passwordValidation) => {
    return Object.values(passwordValidation).every((value) => value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const passwordValidation = validatePassword(password);

    if (!isPasswordValid(passwordValidation)) {
      setShowValidation(true);
      return;
    } else {
      setShowValidation(false);
    }

    if (email === "admin@example.com" && password === "Password1$") {
      onLogin({ isAuthenticated: true, role: "admin" });
    } else if (email === "teacher@example.com" && password === "Password2$") {
      onLogin({ isAuthenticated: true, role: "teacher" });
    } else if (email === "student@example.com" && password === "Password3$") {
      onLogin({ isAuthenticated: true, role: "student" });
    } else {
      setEmailError(t("invalidEmailPassword"));
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword === "") {
      setShowValidation(false);
    }
  };

  const passwordValidation = validatePassword(password);

  return (
    <>
      <LanguageSelector /> {/* Добавяне на LanguageSelector */}
      <Components.Container>
        <Components.SignInContainer>
          <Components.Form onSubmit={handleLogin}>
            <Components.Title>{t("signIn")}</Components.Title>
            <Components.Input
              type="email"
              placeholder={t("email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <Components.Error>{emailError}</Components.Error>}
            <Components.Input
              type="password"
              placeholder={t("password")}
              value={password}
              onChange={handlePasswordChange}
            />
            {showValidation && (
              <Components.ValidationTracker>
                <Components.ValidationItem
                  isValid={passwordValidation.minLength}
                >
                  {passwordValidation.minLength ? "✔️" : "❌"}{" "}
                  {t("passwordRequirements.minLength")}
                </Components.ValidationItem>
                <Components.ValidationItem
                  isValid={passwordValidation.hasUpperCase}
                >
                  {passwordValidation.hasUpperCase ? "✔️" : "❌"}{" "}
                  {t("passwordRequirements.uppercase")}
                </Components.ValidationItem>
                <Components.ValidationItem
                  isValid={passwordValidation.hasLowerCase}
                >
                  {passwordValidation.hasLowerCase ? "✔️" : "❌"}{" "}
                  {t("passwordRequirements.lowercase")}
                </Components.ValidationItem>
                <Components.ValidationItem
                  isValid={passwordValidation.hasNumber}
                >
                  {passwordValidation.hasNumber ? "✔️" : "❌"}{" "}
                  {t("passwordRequirements.number")}
                </Components.ValidationItem>
                <Components.ValidationItem
                  isValid={passwordValidation.hasSpecialChar}
                >
                  {passwordValidation.hasSpecialChar ? "✔️" : "❌"}{" "}
                  {t("passwordRequirements.specialChar")}
                </Components.ValidationItem>
              </Components.ValidationTracker>
            )}
            <Components.Anchor href="#">
              {t("forgotPassword")}
            </Components.Anchor>
            <Components.Button type="submit">
              {t("signInButton")}
            </Components.Button>
          </Components.Form>
        </Components.SignInContainer>
        <Components.OverlayContainer>
          <Components.Overlay>
            <Components.TextContainer>
              <Components.WelcomeTitle>{t("welcome")}</Components.WelcomeTitle>
              <Components.Subtitle>{t("subtitle")}</Components.Subtitle>
            </Components.TextContainer>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </>
  );
};

export default Login;
