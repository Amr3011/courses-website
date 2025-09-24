
import SignUpForm from "@/components/Auth/signUpForm";

const SignUp = () => {
  return (
    <div
      className=" min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/67fdceadc4bf2fac05c7defb/68431940fcdb16c695c0756d_pexels-mikhail-nilov-6592559.avif')",
      }}
    >
      <div className="flex justify-center md:justify-end items-center h-screen bg-black bg-opacity-10">
        <div className="w-1/2">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
