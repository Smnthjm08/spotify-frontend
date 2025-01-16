import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function SettingsPage() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
        Settings
      </h1>

      <div className="max-w-6xl">
        <Card>
          <CardHeader className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Sessions
          </CardHeader>
          <CardContent>
            <div className="border-4 min-h-16 font-bold">
              <Link to="/settings/sessions">My Active Sessions</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
