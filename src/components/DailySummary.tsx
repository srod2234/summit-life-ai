import { Card } from "@/components/ui/card";
import { DollarSign, Moon, ListTodo, TrendingUp } from "lucide-react";

export const DailySummary = () => {
  return (
    <Card className="p-6 bg-gradient-primary border-2 border-primary/30 shadow-finance backdrop-blur-glass animate-fade-in hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-foreground" />
        <h2 className="text-xl font-bold text-foreground">Daily Summary</h2>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <DollarSign className="w-5 h-5 text-finance mt-0.5 flex-shrink-0" />
          <p className="text-sm text-foreground">
            <span className="font-semibold">Finances stable.</span> On track with monthly budget.
          </p>
        </div>
        
        <div className="flex items-start gap-3">
          <Moon className="w-5 h-5 text-health mt-0.5 flex-shrink-0" />
          <p className="text-sm text-foreground">
            <span className="font-semibold">Sleep 7h 10m, recovery 78%.</span> Good energy levels today.
          </p>
        </div>
        
        <div className="flex items-start gap-3">
          <ListTodo className="w-5 h-5 text-productivity mt-0.5 flex-shrink-0" />
          <p className="text-sm text-foreground">
            <span className="font-semibold">3 tasks due today.</span> Suggest training in the afternoon for optimal energy.
          </p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-foreground/10">
        <p className="text-xs text-foreground/70 text-center">
          Updated 5 minutes ago
        </p>
      </div>
    </Card>
  );
};
