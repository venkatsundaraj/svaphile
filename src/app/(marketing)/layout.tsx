import Header from "@/components/header"
import React, { FC } from "react"

interface layoutProps {
  children: React.ReactNode
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default layout
