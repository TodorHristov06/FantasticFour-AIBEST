import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import * as Components from "../components/loginComponents";
import "../localization/i18n.js"; // Актуализиран път към i18n.js
import LanguageSelector from "../components/LanguageSelector";
import { useAuth } from "../components/AuthContext";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Проверка на валидността на имейл и парола
    let role = null;

    if (email === "admin@example.com" && password === "Password1$") {
      role = "admin";
    } else if (email === "teacher@example.com" && password === "Password2$") {
      role = "teacher";
    } else if (email === "student@example.com" && password === "Password3$") {
      role = "student";
    } else {
      setEmailError(t("invalidEmailPassword"));
      return;
    }

    login({ isAuthenticated: true, role });

    // Навигация след успешен логин
    switch (role) {
      case "admin":
        navigate("/admin");
        break;
      case "teacher":
        navigate("/teacher");
        break;
      case "student":
        navigate("/student");
        break;
      default:
        navigate("/");
        break;
    }
  };

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
              id="email"
            />
            {emailError && <Components.Error>{emailError}</Components.Error>}
            <Components.Input
              type="password"
              placeholder={t("password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
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
