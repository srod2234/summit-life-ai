import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: ReactNode;
  variant: "finance" | "health" | "productivity" | "default";
  className?: string;
}

export const DashboardCard = ({ 
  title, 
  value, 
  subtitle, 
  icon, 
  variant,
  className 
}: DashboardCardProps) => {
  const variantStyles = {
    finance: "border-finance/30 hover:shadow-finance bg-gradient-to-br from-card to-finance/5",
    health: "border-health/30 hover:shadow-health bg-gradient-to-br from-card to-health/5",
    productivity: "border-productivity/30 hover:shadow-productivity bg-gradient-to-br from-card to-productivity/5",
    default: "border-border hover:shadow-lg bg-card",
  };

  const iconVariants = {
    finance: "text-finance",
    health: "text-health",
    productivity: "text-productivity",
    default: "text-primary",
  };

  return (
    <Card 
      className={cn(
        "p-6 transition-all duration-300 backdrop-blur-glass border-2",
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {title}
        </h3>
        <div className={cn("text-2xl", iconVariants[variant])}>
          {icon}
        </div>
      </div>
      
      <div className="space-y-1">
        <p className="text-3xl font-bold text-foreground">
          {value}
        </p>
        {subtitle && (
          <p className="text-sm text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </Card>
  );
};
