import { useMutation } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { resetPasswordRequest } from "../../lib/api";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function ResetPasswordPage({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();

  const verificationCode = searchParams.get("code");
  const exp = searchParams.get("exp");

  const linkisValid = exp && Number(exp) > Date.now();
  console.log(linkisValid);

  const { mutate, isPending } = useMutation({
    mutationFn: resetPasswordRequest,
    onSuccess: (response) => {
      toast({
        title: "Success!",
        description:
          response?.message?.toString() || "User Registered Successfully.",
      });
      navigate("/login", { replace: true });
    },
    onError: () => {
      toast({
        title: "Something went wrong!",
        description: "There was a problem while creating your account.",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationCode) {
      mutate({ password, verificationCode });
    } else {
      toast({
        title: "Error",
        description: "Verification code is missing.",
      });
    }
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      {!linkisValid ? (
        <Alert className="max-w-2xl">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Reset Password Link Expired!</AlertTitle>
          <AlertDescription>
            Forgot your password?{" "}
            <Link to="/forgot-password">
              <span className="hover:text-gray-500 underline ">Click here</span>
            </Link>{" "}
            to reset it. New to the site?{" "}
            <Link to="/register">
              <span className="underline hover:text-gray-500">Register</span>
            </Link>{" "}
            Now and get started!
          </AlertDescription>
        </Alert>
      ) : (
        <div className="w-full max-w-sm">
          <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Sign Up</CardTitle>
                <CardDescription>
                  Enter your email below to register your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        placeholder="**********"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="password"> Confirm Password</Label>
                      </div>
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="**********"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    <Button
                      disabled={
                        isPending ||
                        password.length < 6 ||
                        password !== confirmPassword
                      }
                      type="submit"
                      className="w-full"
                    >
                      {isPending ? "Logging in..." : "Login"}
                    </Button>
                  </div>
                  <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="underline underline-offset-4">
                      Login
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
