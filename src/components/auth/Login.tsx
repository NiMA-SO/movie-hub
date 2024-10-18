import { useEffect, useRef, useState } from "react";
import useAuthAcceptLogin from "../../hooks/auth/useAuthAcceptLogin";
import useAuthToken from "../../hooks/auth/useAuthToken";
import useAuthSession from "../../hooks/auth/useAuthSession";

const Login = () => {
  const session = localStorage.getItem("session_id");
  useEffect(() => {
    if (session) {
      location.href = "/";
    }
  }, [session]);

  const uName = useRef<HTMLInputElement>(null);
  const pass = useRef<HTMLInputElement>(null);

  // انتقال هوک به بالای کامپوننت
  const { data } = useAuthToken();
  const mutation = useAuthAcceptLogin(); // مطمئن شو که هوک اینجا به درستی فراخوانی می‌شه
  const createSession = useAuthSession(); // مطمئن شو که هوک اینجا به درستی فراخوانی می‌شه

  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const username = uName.current?.value || undefined;
    const password = pass.current?.value || undefined;
    const token = data?.request_token; // باید معتبر باشد

    if (token && username && password) {
      mutation.mutate(
        { username, password, token },
        {
          onSuccess: () => {
            createSession.mutate(token, {
              onSuccess: (data) => {
                localStorage.setItem("session_id", data.session_id);
                location.href = "/";
                setLoading(false);
              },
              onError: () => {
                setLoading(false);
              }
            });
          },
          onError: () => {
            setLoading(false);
          }
        }
      );
    } else {
      setLoading(false);
      console.error("Missing username, password, or token");
    }
  };

  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <form
        className="w-[450px] min-w-[300px] bg-white dark:bg-[#2c2c2e] h-[400px] rounded-xl flex items-center justify-center flex-col gap-7"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          ref={uName}
          placeholder="user name"
          className="w-[90%] md:w-[80%] dark:bg-[#1c1c1e] bg-[#f8fafa] h-[40px] rounded-lg border border-[#e5e5e5] dark:border-[#3a3a3c] outline-none dark:text-white px-3"
        />
        <input
          type="password"
          ref={pass}
          placeholder="password"
          className="w-[90%] md:w-[80%] dark:bg-[#1c1c1e] bg-[#f8fafa] h-[40px] rounded-lg border border-[#e5e5e5] dark:border-[#3a3a3c] outline-none dark:text-white px-3"
        />
        <button className="w-[90%] md:w-[80%] duration-300 rounded-lg border dark:border-[#ffd580] border-[#ff5733] dark:hover:bg-[#ffd580] hover:bg-[#ff5733] dark:text-white dark:hover:text-[#1c1c1e] hover:text-white py-3 font-semibold tracking-[0.2rem]">
          {!loading ? (
            "SUBMIT"
          ) : (
            <div className="flex justify-center items-center h-[40px] gap-4">
              <span className="bg-[#ff3b30] border border-white dark:border-black dark:bg-[#ff9500] animate-[button-loading_1s_infinite] rounded-full w-[15px] h-[15px] mt-1"></span>
              <span className="bg-[#ff3b30] border border-white dark:border-black dark:bg-[#ff9500] animate-[button-loading-center_1s_infinite] rounded-full w-[15px] h-[15px] mt-1"></span>
              <span className="bg-[#ff3b30] border border-white dark:border-black dark:bg-[#ff9500] animate-[button-loading_1s_infinite] rounded-full w-[15px] h-[15px] mt-1"></span>{" "}
            </div>
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
