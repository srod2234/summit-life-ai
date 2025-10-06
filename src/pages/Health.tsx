import { DashboardCard } from "@/components/DashboardCard";
import { InsightCard } from "@/components/InsightCard";
import { Activity, Moon, Zap, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const Health = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Health & Recovery</h1>
        <p className="text-muted-foreground">Monitor sleep, strain, and recovery metrics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Recovery Score"
          value="78%"
          subtitle="Green - Ready to perform"
          icon={<Activity />}
          variant="health"
        />
        
        <DashboardCard
          title="Sleep"
          value="7h 10m"
          subtitle="92% sleep efficiency"
          icon={<Moon />}
          variant="health"
        />
        
        <DashboardCard
          title="Strain"
          value="14.2"
          subtitle="Moderate intensity"
          icon={<Zap />}
          variant="health"
        />
        
        <DashboardCard
          title="Heart Rate"
          value="62 bpm"
          subtitle="Resting average"
          icon={<Heart />}
          variant="health"
        />
      </div>

      {/* Weekly Trend */}
      <Card className="p-6 bg-card border-2 border-health/30">
        <h2 className="text-xl font-bold text-foreground mb-4">7-Day Recovery Trend</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Monday</span>
            <div className="flex items-center gap-2">
              <div className="h-2 w-32 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-gradient-health" style={{ width: '85%' }}></div>
              </div>
              <span className="text-sm font-semibold text-foreground w-12">85%</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Tuesday</span>
            <div className="flex items-center gap-2">
              <div className="h-2 w-32 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-gradient-health" style={{ width: '72%' }}></div>
              </div>
              <span className="text-sm font-semibold text-foreground w-12">72%</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Wednesday</span>
            <div className="flex items-center gap-2">
              <div className="h-2 w-32 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-gradient-health" style={{ width: '68%' }}></div>
              </div>
              <span className="text-sm font-semibold text-foreground w-12">68%</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Thursday</span>
            <div className="flex items-center gap-2">
              <div className="h-2 w-32 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-gradient-health" style={{ width: '78%' }}></div>
              </div>
              <span className="text-sm font-semibold text-foreground w-12">78%</span>
            </div>
          </div>
        </div>
      </Card>

      {/* AI Insights */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">AI Insights</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <InsightCard
            category="Health"
            insight="Your average recovery dropped 10% after three consecutive high-strain days. Recommend one active recovery day."
            variant="health"
          />
          
          <InsightCard
            category="Health"
            insight="Sleep quality improved by 15% on nights when you avoided screens 1 hour before bed. Consider making this a habit."
            variant="health"
          />
        </div>
      </div>
    </div>
  );
};

export default Health;
