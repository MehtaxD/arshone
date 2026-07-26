"use client"

import * as React from "react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboardIcon, ListIcon, ChartBarIcon, FolderIcon, UsersIcon, CameraIcon, FileTextIcon, Settings2Icon, CircleHelpIcon, SearchIcon, DatabaseIcon, FileChartColumnIcon, FileIcon, CommandIcon, MailIcon } from "lucide-react"

const data = {
  user: {
    name: "Admin",
    email: "admin@arshone.com",
    avatar: "/logo.png",
  },

  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: <LayoutDashboardIcon />,
    },
    {
      title: "Blog",
      url: "/admin/blogs",
      icon: <FileTextIcon />,
    },
    {
      title: "Products",
      url: "/admin/products",
      icon: <DatabaseIcon />,
    },
    {
      title: "Projects",
      url: "/admin/projects",
      icon: <FolderIcon />,
    },
    {
      title: "Media Library",
      url: "/admin/media",
      icon: <CameraIcon />,
    },
    {
      title: "SEO",
      url: "/admin/seo",
      icon: <ChartBarIcon />,
    },
    {
      title: "Contact",
      url: "/admin/messages",
      icon: <MailIcon />,
    },
  ],

  documents: [],

  navSecondary: [
    {
      title: "Settings",
      url: "/admin/settings",
      icon: <Settings2Icon />,
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={<a href="#" />}
            >
              import Image from "next/image"
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
