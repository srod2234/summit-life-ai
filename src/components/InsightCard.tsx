import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  category: string;
  insight: string;
  variant: "finance" | "health" | "productivity";
}

export const InsightCard = ({ category, insight, variant }: InsightCardProps) => {
  const borderColors = {
    finance: "border-finance/50",
    health: "border-health/50",
    productivity: "border-productivity/50",
  };

  const iconColors = {
    finance: "text-finance",
    health: "text-health",
    productivity: "text-productivity",
  };

  return (
    <Card 
      className={cn(
        "p-4 border-l-4 bg-card/50 backdrop-blur-glass transition-all duration-300 hover:scale-[1.02]",
        borderColors[variant]
      )}
    >
      <div className="flex gap-3">
        <Sparkles className={cn("w-5 h-5 mt-0.5 flex-shrink-0", iconColors[variant])} />
        <div className="space-y-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {category}
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            {insight}
          </p>
        </div>
      </div>
    </Card>
  );
};
