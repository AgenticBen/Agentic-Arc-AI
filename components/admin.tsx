import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  // Mock data for demonstration
  const dashboardStats = {
    visitors: 1247,
    topPages: [
      { page: "Home", views: 456 },
      { page: "AI Transformation", views: 234 },
      { page: "Workshops", views: 189 },
      { page: "Contact", views: 167 }
    ],
    avgTimeOnSite: "3:24"
  };

  const formSubmissions = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@techcorp.com",
      company: "TechCorp Inc",
      role: "CTO",
      topic: "AI Transformation",
      message: "Interested in discussing AI implementation for our manufacturing processes...",
      date: "2025-01-15",
      status: "New"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@innovate.co",
      company: "Innovate Solutions",
      role: "VP Strategy",
      topic: "Workshops",
      message: "Would like to register our team for the upcoming AI workshop...",
      date: "2025-01-14",
      status: "Responded"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily@startup.ai",
      company: "StartupAI",
      role: "CEO",
      topic: "AI Academy",
      message: "Looking for comprehensive AI training for our leadership team...",
      date: "2025-01-13",
      status: "New"
    }
  ];

  const workshopRegistrants = [
    {
      id: 1,
      name: "David Park",
      email: "david@enterprise.com",
      company: "Enterprise Solutions",
      role: "Director of Innovation",
      workshop: "Q1 2025 AI Strategy Workshop",
      date: "2025-01-14"
    },
    {
      id: 2,
      name: "Lisa Wang",
      email: "lisa@growth.co",
      company: "Growth Dynamics",
      role: "Head of Operations",
      workshop: "Q1 2025 AI Strategy Workshop",
      date: "2025-01-13"
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo authentication
    if (credentials.username === "admin" && credentials.password === "demo123") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials. Use admin/demo123 for demo.");
    }
  };

  const exportToCsv = (data: any[], filename: string) => {
    const headers = Object.keys(data[0]).join(",");
    const csvContent = data.map(row => 
      Object.values(row).map(value => `"${value}"`).join(",")
    ).join("\n");
    const csv = `${headers}\n${csvContent}`;
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center panel-ivory">
        <Card className="neu-card border-0 w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-primary text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                className="neu-button w-full px-4 py-2 border-0"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                className="neu-button w-full px-4 py-2 border-0"
                required
              />
              <Button type="submit" className="neu-button bg-secondary hover:bg-secondary/90 text-white font-bold w-full py-2 border-2 border-secondary">
                Login
              </Button>
            </form>
            <p className="text-sm text-gray-500 text-center mt-4">
              Demo: admin / demo123
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 panel-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-primary">Admin Dashboard</h1>
          <Button 
            onClick={() => setIsAuthenticated(false)}
            variant="outline"
            className="neu-button border-primary text-primary hover:bg-primary hover:text-white"
          >
            Logout
          </Button>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="neu-card border-0">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Total Visitors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">{dashboardStats.visitors}</div>
              <p className="text-sm text-gray-600">Last 30 days</p>
            </CardContent>
          </Card>

          <Card className="neu-card border-0">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Avg Time on Site</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">{dashboardStats.avgTimeOnSite}</div>
              <p className="text-sm text-gray-600">Minutes:Seconds</p>
            </CardContent>
          </Card>

          <Card className="neu-card border-0">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Form Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">{formSubmissions.length}</div>
              <p className="text-sm text-gray-600">This week</p>
            </CardContent>
          </Card>
        </div>

        {/* Top Pages */}
        <Card className="neu-card border-0 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Top Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {dashboardStats.topPages.map((page, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{page.page}</span>
                  <span className="font-semibold text-secondary">{page.views} views</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tabs for different data views */}
        <Tabs defaultValue="submissions" className="space-y-4">
          <TabsList className="neu-card border-0">
            <TabsTrigger value="submissions">Form Submissions</TabsTrigger>
            <TabsTrigger value="workshops">Workshop Registrants</TabsTrigger>
          </TabsList>

          <TabsContent value="submissions">
            <Card className="neu-card border-0">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl text-primary">Contact Form Submissions</CardTitle>
                  <Button 
                    onClick={() => exportToCsv(formSubmissions, 'form-submissions')}
                    className="neu-button bg-secondary hover:bg-secondary/90 text-white px-4 py-2 border-2 border-secondary"
                  >
                    Export CSV
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Topic</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {formSubmissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell className="font-medium">{submission.name}</TableCell>
                        <TableCell>{submission.email}</TableCell>
                        <TableCell>{submission.company}</TableCell>
                        <TableCell>{submission.topic}</TableCell>
                        <TableCell>{submission.date}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-xs ${
                            submission.status === 'New' 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {submission.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workshops">
            <Card className="neu-card border-0">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl text-primary">Workshop Registrants</CardTitle>
                  <Button 
                    onClick={() => exportToCsv(workshopRegistrants, 'workshop-registrants')}
                    className="neu-button bg-secondary hover:bg-secondary/90 text-white px-4 py-2 border-2 border-secondary"
                  >
                    Export CSV
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Workshop</TableHead>
                      <TableHead>Registration Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {workshopRegistrants.map((registrant) => (
                      <TableRow key={registrant.id}>
                        <TableCell className="font-medium">{registrant.name}</TableCell>
                        <TableCell>{registrant.email}</TableCell>
                        <TableCell>{registrant.company}</TableCell>
                        <TableCell>{registrant.role}</TableCell>
                        <TableCell>{registrant.workshop}</TableCell>
                        <TableCell>{registrant.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
