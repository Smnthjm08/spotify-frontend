import { Delete } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import useDeleteSessions from "@/hooks/use-delete-session";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SessionCard({ session }: { session: any }) {
  const { _id, createdAt, userAgent, isCurrent } = session;

  const { deleteSessionRequest, isPending } = useDeleteSessions(_id);

  return (
    <Card>
      <CardHeader className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {_id}
      </CardHeader>
      <CardContent>
        <Badge>{isCurrent ? "Current Session" : "Other Session"}</Badge>
        <div>{userAgent}</div>
        <div>{new Date(createdAt).toLocaleString()}</div>
      </CardContent>
      <CardFooter>
        {!isCurrent && (
          <Button onClick={() => deleteSessionRequest()} disabled={isPending}>
            <Delete />
            Remove Session
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
