import { DashboardCard } from "@/components/DashboardCard";
import { InsightCard } from "@/components/InsightCard";
import { Heart, Users, MessageCircle, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Relationships = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Relationships</h1>
        <p className="text-muted-foreground">Nurture connections and track meaningful interactions</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Close Connections"
          value="12"
          subtitle="Active relationships"
          icon={<Heart />}
          variant="productivity"
        />
        
        <DashboardCard
          title="This Week"
          value="8"
          subtitle="Meaningful interactions"
          icon={<Users />}
          variant="productivity"
        />
        
        <DashboardCard
          title="Messages Sent"
          value="47"
          subtitle="Past 7 days"
          icon={<MessageCircle />}
          variant="productivity"
        />
        
        <DashboardCard
          title="Upcoming Events"
          value="3"
          subtitle="Social calendar"
          icon={<Calendar />}
          variant="productivity"
        />
      </div>

      {/* Recent Interactions */}
      <Card className="p-6 bg-card border-2 border-productivity/30">
        <h2 className="text-xl font-bold text-foreground mb-4">Recent Check-ins</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-border">
            <div>
              <p className="text-sm font-semibold text-foreground">Sarah</p>
              <p className="text-xs text-muted-foreground">Coffee chat - 2 days ago</p>
            </div>
            <span className="text-xs bg-productivity/20 text-productivity px-2 py-1 rounded">Close</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-border">
            <div>
              <p className="text-sm font-semibold text-foreground">Mom & Dad</p>
              <p className="text-xs text-muted-foreground">Video call - 3 days ago</p>
            </div>
            <span className="text-xs bg-health/20 text-health px-2 py-1 rounded">Family</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-border">
            <div>
              <p className="text-sm font-semibold text-foreground">Alex</p>
              <p className="text-xs text-muted-foreground">Gym session - 5 days ago</p>
            </div>
            <span className="text-xs bg-productivity/20 text-productivity px-2 py-1 rounded">Close</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-semibold text-foreground">Jordan</p>
              <p className="text-xs text-muted-foreground">Last contact - 12 days ago</p>
            </div>
            <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">Follow up</span>
          </div>
        </div>
      </Card>

      {/* AI Insights */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">AI Insights</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <InsightCard
            category="Relationships"
            insight="You haven't reached out to Jordan in 12 days. Consider sending a quick message to check in."
            variant="productivity"
          />
          
          <InsightCard
            category="Relationships"
            insight="Your social interactions increased 30% this month, correlating with a 15% boost in overall mood and energy."
            variant="productivity"
          />
        </div>
      </div>
    </div>
  );
};

export default Relationships;
