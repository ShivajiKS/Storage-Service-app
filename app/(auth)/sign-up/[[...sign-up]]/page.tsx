import { SignUp } from "@clerk/nextjs";

export default function SignUpC() {
  return (
    <div className="flex justify-center items-center mt-20">
      <SignUp />
    </div>
  );
}
