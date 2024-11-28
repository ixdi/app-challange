'use client'
import React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
} from "@/components/ui/sidebar"
import { Cross, Trash, X } from "lucide-react"

const productsExample = [
  {
    productId: "1",
    name: "Chocolates",
    description:
      "A delightful assortment of premium chocolates, perfect for any occasion.",
  },
  {
    productId: "2",
    name: "Perfume",
    description:
      "A luxurious fragrance that will leave you feeling fresh and confident.",
  },
  {
    productId: "3",
    name: "Wine",
    description:
      "The perfect complement to any meal, this wine is sure to impress.",
  },
]

export default function SecondarySidebar() {
  const [products] = React.useState(productsExample)
  return (
    <>
      {/* This is the second sidebar */}
      {/* We disable collapsible and let it fill remaining space */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-base font-medium text-foreground">
              Shopping Cart
            </div>
          </div>
          <SidebarInput placeholder="Type to search..." />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {products.map((product) => (
                <a
                  href="#"
                  key={product.productId}
                  className="flex flex-col gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <div className="flex w-full items-center gap-2">
                    <span className="font-medium">{product.name}</span>
                    <span className="ml-auto text-xs">
                      <Trash className="size-3 hover:stroke-red-500" />
                    </span>
                  </div>
                  <span className="line-clamp-2 w-[160px] whitespace-break-spaces text-xs">
                    {product.description}
                  </span>
                </a>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  )
};
