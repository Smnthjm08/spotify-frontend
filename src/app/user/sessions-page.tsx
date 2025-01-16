import SessionCard from "@/components/cards/session-card";
import useSessions from "@/hooks/use-sessions";

export default function SessionsPage() {
  const { sessions, isPending, isSuccess, isError } = useSessions();

  return (
    <main className="container mx-auto p-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
        My Sessions
      </h1>
      <div className="max-w-6xl">
        {isPending && <div>Loading...</div>}
        {isError && <div>Failed to get sessions.</div>}
        {isSuccess &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          sessions.map((session: any) => (
            <SessionCard key={session?._id} session={session} />
          ))}
      </div>
    </main>
  );
}
