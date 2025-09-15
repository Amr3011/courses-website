import LoginForm from "@/components/Auth/loginForm";
import CardRight from "./CardRight";

const Login = () => {
  return (
    <div className="container">
      <div className="flex  justify-center items-center h-screen">
        <div className="w-1/2" >
          <LoginForm />
        </div>
        <div className="w-1/2">
          <CardRight />
        </div>
      </div>
    </div>
  );
};

export default Login;
