import { DashboardCard } from "@/components/DashboardCard";
import { InsightCard } from "@/components/InsightCard";
import { DollarSign, TrendingUp, CreditCard, PiggyBank } from "lucide-react";
import { Card } from "@/components/ui/card";

const Finances = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Finances</h1>
        <p className="text-muted-foreground">Track spending, income, and financial health</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Balance"
          value="$12,847"
          subtitle="+2.5% from last month"
          icon={<DollarSign />}
          variant="finance"
        />
        
        <DashboardCard
          title="Monthly Income"
          value="$8,200"
          subtitle="Salary deposited"
          icon={<TrendingUp />}
          variant="finance"
        />
        
        <DashboardCard
          title="Monthly Spending"
          value="$4,126"
          subtitle="50% of income"
          icon={<CreditCard />}
          variant="finance"
        />
        
        <DashboardCard
          title="Savings"
          value="$4,074"
          subtitle="This month"
          icon={<PiggyBank />}
          variant="finance"
        />
      </div>

      {/* Spending Breakdown */}
      <Card className="p-6 bg-card border-2 border-finance/30">
        <h2 className="text-xl font-bold text-foreground mb-4">Spending Breakdown</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">🍽️ Restaurants</span>
            <span className="text-sm font-semibold text-foreground">$847</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">🏠 Rent</span>
            <span className="text-sm font-semibold text-foreground">$1,500</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">💪 Training</span>
            <span className="text-sm font-semibold text-foreground">$245</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">🛒 Groceries</span>
            <span className="text-sm font-semibold text-foreground">$634</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">🎬 Entertainment</span>
            <span className="text-sm font-semibold text-foreground">$320</span>
          </div>
        </div>
      </Card>

      {/* AI Insights */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">AI Insights</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <InsightCard
            category="Finance"
            insight="You've spent 12% more on restaurants this month compared to last — consider meal prepping to save ~$85 next month."
            variant="finance"
          />
          
          <InsightCard
            category="Finance"
            insight="Subscription analysis: You're paying for 3 streaming services but only used 1 actively. Potential savings: $25/month."
            variant="finance"
          />
        </div>
      </div>
    </div>
  );
};

export default Finances;
