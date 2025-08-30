"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  LayoutDashboard,
  Package,
  Users,
  DollarSign,
  ShoppingCart,
  BarChart3,
  Settings,
  UserCheck,
  FileText,
  Calendar,
  Building2,
} from "lucide-react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Inventory",
    href: "/inventory",
    icon: Package,
  },
  {
    title: "Human Resources",
    href: "/hr",
    icon: Users,
  },
  {
    title: "Finance",
    href: "/finance",
    icon: DollarSign,
  },
  {
    title: "Sales & Orders",
    href: "/sales",
    icon: ShoppingCart,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: BarChart3,
  },
  {
    title: "Documents",
    href: "/documents",
    icon: FileText,
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: Calendar,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="pb-12 w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          {/* Professional Logo Section */}
          <div className="flex items-center space-x-3 mb-6 px-4 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">KT</span>
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tight text-primary">KT Enterprise</h2>
              <p className="text-xs text-muted-foreground">Management System</p>
            </div>
          </div>
          
          <div className="space-y-1">
            <ScrollArea className="h-[calc(100vh-12rem)]">
              {sidebarNavItems.map((item) => (
                <Link key={item.href} href={item.href as any}>
                  <Button
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start mb-1 transition-all duration-200",
                      pathname === item.href 
                        ? "bg-primary/10 text-primary border border-primary/20 shadow-sm" 
                        : "hover:bg-muted/50"
                    )}
                  >
                    <item.icon className="mr-3 h-4 w-4" />
                    {item.title}
                  </Button>
                </Link>
              ))}
            </ScrollArea>
            
            {/* Theme Toggle at bottom */}
            <div className="mt-4 px-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
