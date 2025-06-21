'use client'

import { GlobalProps } from "@/types"
import { GlobalContext } from "./GlobalContext"

export default function GlobalProvider({
  children,
  global,
}: {
  children: React.ReactNode
  global: GlobalProps
}) {
  return <GlobalContext.Provider value={global}>{children}</GlobalContext.Provider>
}
