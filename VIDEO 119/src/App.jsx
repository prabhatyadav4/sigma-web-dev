import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };
  const onSubmit = async (data) => {
    // await delay(2) // Simulating Network Delay
    let r = await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // <-- crucial!
      },
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log(data);
    if (data.username !== "prabhat") {
      setError("login", { message: "Credentials are invalid." });
    }
    if (data.username === "mayank") {
      setError("blocked", { message: "This user is blocked." });
    }
  };

  return (
    <>
      <div className="container">
        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="username"
            {...register("username", {
              required: { value: true, message: "This field is required." },
              minLength: { value: 3, message: "Min length is 3." },
              maxLength: { value: 8, message: "Max length is 8" },
            })}
            type="text"
          />
          {errors.username && (
            <div className="red">{errors.username.message}</div>
          )}
          <br />
          <input
            placeholder="password"
            {...register("password", {
              minLength: { value: 8, message: "Min length is 8" },
            })}
            type="password"
          />
          {errors.password && (
            <div className="red">{errors.password.message}</div>
          )}
          <br />
          <input
            disabled={isSubmitting}
            className="submitBtn"
            type="submit"
            value="Submit"
          />
          {errors.login && <div className="red">{errors.login.message}</div>}
          {errors.blocked && (
            <div className="red">{errors.blocked.message}</div>
          )}
        </form>
        {isSubmitting && <div>Loading...</div>}
      </div>
    </>
  );
}

export default App;
