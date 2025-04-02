"use client";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import {
  SetStateAction,
  startTransition,
  useActionState,
  useEffect,
  useState,
} from "react";
import { ShieldAlert, ShieldCheck, ShieldX } from "lucide-react";
import loginValidation from "./actions/login-validation";
import { useRouter } from "next/navigation";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [value, setValue] = useState("");
  const [state, loginAction, isPending] = useActionState(loginValidation, false);
  const router = useRouter();

  const onChange = (value: SetStateAction<string>) => {
    setValue(value);
  };

  const onComplete = () => {
    startTransition(async () => {
      loginAction(value);
    });
  };

  useEffect(() => {
    if (!isPending && state) {
      router.push("/app/glist");
    }
  }, [isPending, state, router]);

  const handleIcons = () => {
    if (value.length === 6 && !isPending) {
      return state ? (
        <ShieldCheck color="#3baa36" />
      ) : (
        <ShieldX color="#ac2020" />
      );
    } else {
      return <ShieldAlert color="#febc2e" />;
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter the code below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="flex gap-2">
                <Label htmlFor="code">Code</Label>
                <InputOTP
                  maxLength={6}
                  onChange={(value) => onChange(value)}
                  onComplete={onComplete}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <div className="flex flex-col m-2 w-7">{handleIcons()}</div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
