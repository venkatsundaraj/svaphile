import { FC } from "react"
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow dark:shadow-lg">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link className="flex items-center space-x-2" href="#">
          <Icons.PawPrint className="h-10 w-10" />
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-2">
            <Link
              href={"/signup"}
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Sign up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
