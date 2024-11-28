'use client'
import * as React from "react"
import { File, Inbox, Send, ShoppingCart, Trash2 } from "lucide-react"

import NavUser from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export default function MainSidebar() {
  // This is sample data
  const navExample = [
    {
      title: "Shopping Cart",
      url: "#",
      icon: ShoppingCart,
      isActive: true,
    },
    {
      title: "Orders",
      url: "#",
      icon: File,
      isActive: false,
    },
    {
      title: "New Order",
      url: "#",
      icon: Send,
      isActive: false,
    },
    {
      title: "Clean Shopping Cart",
      url: "#",
      icon: Trash2,
      isActive: false,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
      isActive: true,
    },
  ]
  const [activeItem, setActiveItem] = React.useState(navExample[0])
  return (
    <>
      {/* This is the first sidebar */}
      {/* We disable collapsible and adjust width to icon. */}
      {/* This will make the sidebar appear as icons. */}
      <Sidebar
        collapsible="none"
        className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r"
      >
        <SidebarHeader>
          <NavUser />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {navExample.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      onClick={() => {
                        setActiveItem(item)
                      }}
                      isActive={activeItem.title === item.title}
                      className="px-2.5 md:px-2"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  )
}
