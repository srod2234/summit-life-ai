import { DashboardCard } from "@/components/DashboardCard";
import { InsightCard } from "@/components/InsightCard";
import { ListTodo, CheckCircle2, Clock, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const Productivity = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Productivity</h1>
        <p className="text-muted-foreground">Manage tasks and optimize your workflow</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Tasks Today"
          value="3"
          subtitle="2 completed"
          icon={<ListTodo />}
          variant="productivity"
        />
        
        <DashboardCard
          title="Completion Rate"
          value="87%"
          subtitle="This week"
          icon={<CheckCircle2 />}
          variant="productivity"
        />
        
        <DashboardCard
          title="Focus Time"
          value="4.5h"
          subtitle="Deep work today"
          icon={<Clock />}
          variant="productivity"
        />
        
        <DashboardCard
          title="Weekly Goals"
          value="5/7"
          subtitle="On track"
          icon={<Target />}
          variant="productivity"
        />
      </div>

      {/* Task List */}
      <Card className="p-6 bg-card border-2 border-productivity/30">
        <h2 className="text-xl font-bold text-foreground mb-4">Today's Tasks</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-productivity mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground line-through opacity-60">
                Review Q1 financial reports
              </p>
              <p className="text-xs text-muted-foreground">Completed 2 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-productivity mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground line-through opacity-60">
                Team standup meeting
              </p>
              <p className="text-xs text-muted-foreground">Completed 4 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-productivity/10 rounded-lg border-l-2 border-productivity">
            <div className="w-5 h-5 border-2 border-productivity rounded mt-0.5 flex-shrink-0"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                Finish product roadmap draft
              </p>
              <p className="text-xs text-muted-foreground">Due in 3 hours - High priority</p>
            </div>
          </div>
        </div>
      </Card>

      {/* AI Insights */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">AI Insights</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <InsightCard
            category="Productivity"
            insight="Tomorrow's recovery score is 45%. Consider rescheduling your high-focus work blocks to Thursday."
            variant="productivity"
          />
          
          <InsightCard
            category="Productivity"
            insight="Your productivity peaks between 9-11 AM. Schedule your most important tasks during this window."
            variant="productivity"
          />
        </div>
      </div>
    </div>
  );
};

export default Productivity;
