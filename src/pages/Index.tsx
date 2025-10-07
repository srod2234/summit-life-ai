import { DashboardCard } from "@/components/DashboardCard";
import { InsightCard } from "@/components/InsightCard";
import { DailySummary } from "@/components/DailySummary";
import { DollarSign, Activity, Calendar, Brain } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Overview</h1>
        <p className="text-muted-foreground">Your personal operating system dashboard</p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [&>*]:animate-fade-in [&>*:nth-child(1)]:delay-0 [&>*:nth-child(2)]:delay-75 [&>*:nth-child(3)]:delay-150">
        <DashboardCard
          title="Financial Health"
          value="$12,847"
          subtitle="Total Balance"
          icon={<DollarSign />}
          variant="finance"
        />
        
        <DashboardCard
          title="Recovery Score"
          value="78%"
          subtitle="7h 10m sleep"
          icon={<Activity />}
          variant="health"
        />
        
        <DashboardCard
          title="Tasks Today"
          value="3"
          subtitle="2 completed"
          icon={<Calendar />}
          variant="productivity"
        />
      </div>

      {/* AI Insights Section */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-accent" />
          AI Insights
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 [&>*]:animate-fade-in [&>*]:delay-200">
          <InsightCard
            category="Finance"
            insight="You've spent 12% more on restaurants this month compared to last — consider meal prepping to save ~$85 next month."
            variant="finance"
          />
          
          <InsightCard
            category="Health"
            insight="Your average recovery dropped 10% after three consecutive high-strain days. Recommend one active recovery day."
            variant="health"
          />
          
          <InsightCard
            category="Productivity"
            insight="Tomorrow's recovery score is 45%. Consider rescheduling your high-focus work blocks to Thursday."
            variant="productivity"
          />
          
          <InsightCard
            category="Finance"
            insight="Subscription analysis: You're paying for 3 streaming services but only used 1 actively. Potential savings: $25/month."
            variant="finance"
          />
        </div>
      </div>

      {/* Daily Summary */}
      <DailySummary />
    </div>
  );
};

export default Index;
