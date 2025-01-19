import { verifyEmailRequest } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

// PENDING: add error handling and ui for the page
export default function VerifyEmailPage() {
  const { code } = useParams();
  const { isPending, isSuccess, isError } = useQuery({
    queryKey: ["verify-email", code],
    queryFn: () => verifyEmailRequest(code),
  });
  return (
    <div>
      {isSuccess && <div>Email verified successfully!</div>}
      {isError && <div>Error verifying email: {isError}</div>}
      {isPending && <div>Verifying email...</div>}
      <div>Verify email</div>
    </div>
  );
}
