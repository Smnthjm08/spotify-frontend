// components/ProfileForm.tsx
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface ProfileFormProps {
  user: {
    email: string;
    verified: boolean;
    username: string;
  };
  onSubmit: (values: any) => void;
  onCancel: () => void;
}

export function ProfileForm({ user, onSubmit, onCancel }: ProfileFormProps) {
  const form = useForm({
    defaultValues: {
      username: user.username,
      email: user.email,
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder={user.username} {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder={user.email} {...field} />
              </FormControl>
              {!user.verified && (
                <FormDescription>
                  <Badge variant="destructive">
                    Please verify your email for your account.
                  </Badge>
                </FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input 
                  type="password"
                  placeholder="*********" 
                  {...field} 
                  disabled 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="ghost"
            className="rounded-full"
            size="lg"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button type="submit" className="rounded-full" size="lg">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}