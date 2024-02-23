import Image from "next/image"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      <section className="bg-primary flex items-center justify-center min-h-screen w-full text-white p-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex items-start justify-center flex-col gap-4">
              <h1 className="text-6xl text-heading font-bold">
                Open your health account
              </h1>
              <p className="text-2xl text-paragraph my-6">
                Trusted by more than 3Cr Indians
              </p>
            </div>
            <div className="flex flex-col w-full min-h-96 bg-border rounded-md"></div>
          </div>
        </div>
      </section>

      <section className="min-h-screen w-screen overflow-x-hidden bg-background flex items-center py-10">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          <Card className="bg-border rounded-md">
            <CardHeader>
              <CardTitle>
                Access India&apos;s digital health ecosystem
              </CardTitle>
              <CardDescription>with your ABHA address</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                alt="Illustration of a person using a digital health app"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
            </CardContent>
          </Card>
          <Card className="bg-border rounded-md">
            <CardHeader>
              <CardTitle>A smart health locker</CardTitle>
              <CardDescription>
                to organise all your medical records
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                alt="Illustration of a smart health locker"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
            </CardContent>
          </Card>
          <Card className="bg-border rounded-md">
            <CardHeader>
              <CardTitle>Automated health profile</CardTitle>
              <CardDescription>
                so you make better health decisions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                alt="Illustration of a person with a health app"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-primary flex items-center justify-center w-full text-white p-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex items-start justify-center flex-col gap-4">
              <h1 className="text-2xl md:text-5xl text-heading font-bold">
                Open your health account
              </h1>
              <p className="text-2xl text-paragraph my-6">
                Trusted by more than 3Cr Indians
              </p>
            </div>
            <div className="flex flex-col w-full min-h-48 bg-border rounded-md"></div>
          </div>
        </div>
      </section>
    </main>
  )
}
