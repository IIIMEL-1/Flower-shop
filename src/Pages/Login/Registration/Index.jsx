export default function Registration({
  handleFormSubmit,
  error,
  state: { email, password, phone, city, fullName },
  setState: { setEmail, setPassword, setPhone, setCity, setFullName },
}) {
  return (
    <form action="#" onSubmit={handleFormSubmit}>
      <div>
        <h3>Ваше имя:</h3>
        <input
          id="username"
          type="text"
          name="username"
          pattern="[Аа-Яя]{1,30}"
          autoComplete="username"
          placeholder="Вася Пупкин"
          onChange={(el) => setFullName(el.target.value)}
          value={fullName}
          minLength={2}
          maxLength={18}
        />
      </div>
      <div>
        <h3>Город:</h3>
        <input
          type="text"
          name="city"
          pattern="[Аа-Яя]{1,30}"
          placeholder="Владивосток"
          onChange={(el) => setCity(el.target.value)}
          value={city}
          minLength={2}
          maxLength={20}
        />
      </div>
      <div>
        <h3>Моб. номер:</h3>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="+_(___) ___-__-__"
          onChange={(el) => setPhone(el.target.value)}
          value={phone}
          minLength={11}
          maxLength={16}
        />
      </div>
      <div>
        <h3>Электронная почта:</h3>
        <input
          id="email"
          type="email"
          autoComplete="email"
          name="email"
          placeholder="Эл. почта"
          onChange={(el) => setEmail(el.target.value)}
          value={email}
        />
      </div>
      <div>
        <h3>Пароль:</h3>
        <input
          type="text"
          id="password"
          name="password"
          security="none"
          autoComplete="current-password"
          placeholder="Пароль"
          onChange={(el) => setPassword(el.target.value)}
          value={password}
          minLength={6}
          maxLength={18}
        />
      </div>

      {error ? (
        <div style={{ fontSize: "17px", textAlign: "center", color: "red" }}>
          {error.data.message}
        </div>
      ) : (
        ""
      )}

      <button
        disabled={
          fullName.length >= 3 &&
          email.includes("@") &&
          password.length >= 6 &&
          city.length >= 3 &&
          phone.length >= 11
            ? false
            : true
        }
        className="sendForm"
      >
        Зарегистрироваться
      </button>
    </form>
  );
}
