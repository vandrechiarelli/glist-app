import { images } from "../constants";
import Image from "next/image";
import { LoginForm } from "@/components/login-form";
import HotToast from "@/components/hot-toast";

export default function Home() {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center p-6 md:p-10">
          <Image
            src={images.logo}
            alt="GList logo"
            width={250}
            height={250}
            className="rouded-md"
            priority
          />
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="w-full max-w-sm">
            <LoginForm />
            <div className="mt-4 text-center text-sm">
              <HotToast
                message="No worries — we’ll save you the trouble of forgetting the password later!"
                description="No account?"
                duration={7000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
