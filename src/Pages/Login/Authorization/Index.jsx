import React from "react";

export default function Authorization({
  handleFormSubmit,
  error,
  state: { email, password },
  setState: { setEmail, setPassword },
}) {
  return (
    <form action="#" onSubmit={handleFormSubmit}>
      <div>
        <h3>Электронная почта:</h3>
        <input
          id="username"
          type="email"
          name="username"
          autoComplete="username"
          placeholder="Эл. почта"
          onChange={(el) => setEmail(el.target.value)}
          value={email}
        />
      </div>
      <div>
        <h3>Пароль:</h3>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          onChange={(el) => setPassword(el.target.value)}
          value={password}
          minLength={6}
          maxLength={15}
        />
      </div>

      {error ? (
        <div style={{ fontSize: "17px", textAlign: "center", color: "red" }}>
          {error.data.message}
        </div>
      ) : (
        ""
      )}

      <button disabled={email && password ? false : true} className="sendForm">
        Войти
      </button>
    </form>
  );
}
