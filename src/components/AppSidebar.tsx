import { NavLink } from "react-router-dom";
import { DollarSign, Activity, Heart, ListTodo, LayoutDashboard, Brain } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Overview", url: "/", icon: LayoutDashboard },
  { title: "Finances", url: "/finances", icon: DollarSign },
  { title: "Health", url: "/health", icon: Activity },
  { title: "Relationships", url: "/relationships", icon: Heart },
  { title: "Productivity", url: "/productivity", icon: ListTodo },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar className={open ? "w-64" : "w-16"} collapsible="icon">
      <SidebarContent>
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary flex-shrink-0" />
            {open && (
              <span className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
                AI Life
              </span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className={!open ? "sr-only" : ""}>
            Domains
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        isActive
                          ? "bg-primary/10 text-primary font-medium transition-all duration-200"
                          : "hover:bg-muted/50 hover:translate-x-1 transition-all duration-200"
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Toggle button at bottom */}
      <div className="mt-auto p-4 border-t border-border">
        <SidebarTrigger className="w-full" />
      </div>
    </Sidebar>
  );
}
