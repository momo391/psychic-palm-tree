import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { SignUpForm } from "./_partials/form";

export default function Page() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-xs font-sans text-muted-foreground">
            made by mohammed lamine bennouioua
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
