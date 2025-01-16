// app/profile/page.tsx
import useAuth from "@/hooks/use-auth";
import { ProfileForm } from "../../components/forms/profile-menu";

export default function ProfilePage() {
  const { user } = useAuth();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any) => {
    // Handle form submission
    console.log(values);
  };

  const handleCancel = () => {
    // Handle cancellation
    console.log("Cancelled");
  };

  return (
    <main className="container mx-auto p-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
        Edit Profile
      </h1>

      <div className="max-w-6xl">
        <ProfileForm
          user={user}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </div>
    </main>
  );
}
