import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Settings as SettingsIcon, DollarSign, Activity, Calendar, Link2, Save } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [plaidConnected, setPlaidConnected] = useState(false);
  const [whoopConnected, setWhoopConnected] = useState(false);
  const [notionConnected, setNotionConnected] = useState(false);

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your account connections have been updated.",
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
          <SettingsIcon className="w-8 h-8 text-accent" />
          Settings
        </h1>
        <p className="text-muted-foreground">Connect your accounts and manage integrations</p>
      </div>

      {/* Financial Integrations */}
      <Card className="p-6 border-2 border-finance/30 hover:shadow-finance transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <DollarSign className="w-6 h-6 text-finance" />
          <div>
            <h2 className="text-xl font-bold text-foreground">Financial Integrations</h2>
            <p className="text-sm text-muted-foreground">Connect your bank accounts and financial data</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Plaid */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="plaid" className="text-base font-semibold">Plaid</Label>
                <p className="text-sm text-muted-foreground">Connect bank accounts and track transactions</p>
              </div>
              <Switch
                id="plaid"
                checked={plaidConnected}
                onCheckedChange={setPlaidConnected}
              />
            </div>
            
            {plaidConnected && (
              <div className="pl-4 space-y-2 animate-fade-in">
                <div className="space-y-2">
                  <Label htmlFor="plaid-key" className="text-sm">Client ID</Label>
                  <Input id="plaid-key" placeholder="Enter your Plaid Client ID" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="plaid-secret" className="text-sm">Secret Key</Label>
                  <Input id="plaid-secret" type="password" placeholder="Enter your Plaid Secret" />
                </div>
              </div>
            )}
          </div>

          <Separator />

          {/* Manual Entry */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-base font-semibold">Manual Entry</Label>
                <p className="text-sm text-muted-foreground">Manually track expenses and income</p>
              </div>
              <Button variant="outline" size="sm">
                <Link2 className="w-4 h-4 mr-2" />
                Configure
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Health & Fitness Integrations */}
      <Card className="p-6 border-2 border-health/30 hover:shadow-health transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <Activity className="w-6 h-6 text-health" />
          <div>
            <h2 className="text-xl font-bold text-foreground">Health & Fitness</h2>
            <p className="text-sm text-muted-foreground">Track recovery, sleep, and training data</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* WHOOP */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="whoop" className="text-base font-semibold">WHOOP</Label>
                <p className="text-sm text-muted-foreground">Sync recovery scores, strain, and sleep data</p>
              </div>
              <Switch
                id="whoop"
                checked={whoopConnected}
                onCheckedChange={setWhoopConnected}
              />
            </div>
            
            {whoopConnected && (
              <div className="pl-4 space-y-2 animate-fade-in">
                <div className="space-y-2">
                  <Label htmlFor="whoop-token" className="text-sm">API Token</Label>
                  <Input id="whoop-token" type="password" placeholder="Enter your WHOOP API token" />
                </div>
              </div>
            )}
          </div>

          <Separator />

          {/* Apple Health / Google Fit */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-base font-semibold">Apple Health / Google Fit</Label>
                <p className="text-sm text-muted-foreground">Import health metrics from your device</p>
              </div>
              <Button variant="outline" size="sm">
                <Link2 className="w-4 h-4 mr-2" />
                Connect
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Productivity Integrations */}
      <Card className="p-6 border-2 border-productivity/30 hover:shadow-productivity transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-6 h-6 text-productivity" />
          <div>
            <h2 className="text-xl font-bold text-foreground">Productivity & Planning</h2>
            <p className="text-sm text-muted-foreground">Sync tasks, calendar, and notes</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Notion */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="notion" className="text-base font-semibold">Notion</Label>
                <p className="text-sm text-muted-foreground">Sync databases, tasks, and notes</p>
              </div>
              <Switch
                id="notion"
                checked={notionConnected}
                onCheckedChange={setNotionConnected}
              />
            </div>
            
            {notionConnected && (
              <div className="pl-4 space-y-2 animate-fade-in">
                <div className="space-y-2">
                  <Label htmlFor="notion-token" className="text-sm">Integration Token</Label>
                  <Input id="notion-token" type="password" placeholder="Enter your Notion integration token" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notion-db" className="text-sm">Database ID</Label>
                  <Input id="notion-db" placeholder="Enter your Notion database ID" />
                </div>
              </div>
            )}
          </div>

          <Separator />

          {/* Google Calendar */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-base font-semibold">Google Calendar</Label>
                <p className="text-sm text-muted-foreground">Import events and scheduling data</p>
              </div>
              <Button variant="outline" size="sm">
                <Link2 className="w-4 h-4 mr-2" />
                Connect
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} size="lg" className="gap-2">
          <Save className="w-4 h-4" />
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Settings;
