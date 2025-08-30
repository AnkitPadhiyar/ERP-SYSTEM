"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building2,
  Users,
  Package,
  CreditCard,
  TrendingUp,
  Bell,
  Search,
  Settings,
  BarChart3,
  DollarSign,
  ShoppingCart,
  UserCheck,
  Calendar,
  FileText,
  ArrowRight,
  Activity,
  Zap,
  Star,
  ChevronDown,
  Eye,
  Filter,
  Moon,
  Sun,
  Sparkles,
  Target,
  Award,
  Clock,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Component() {
  const { theme, setTheme } = useTheme()
  const [notifications, setNotifications] = useState(3)
  const [isLoading, setIsLoading] = useState(false)
  const [revenue, setRevenue] = useState(0)
  const [employees, setEmployees] = useState(0)
  const [inventory, setInventory] = useState(0)
  const [payments, setPendingPayments] = useState(0)
  const [showQuickAction, setShowQuickAction] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [quickActionType, setQuickActionType] = useState<string | null>(null)

  // Animated counters - only run once
  useEffect(() => {
    if (hasAnimated) return

    const animateCounter = (setter: (value: number) => void, target: number, duration = 2000) => {
      let start = 0
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setter(target)
          clearInterval(timer)
        } else {
          setter(Math.floor(start))
        }
      }, 16)
    }

    const timeoutId = setTimeout(() => {
      animateCounter(setRevenue, 124563)
      animateCounter(setEmployees, 247)
      animateCounter(setInventory, 1429)
      animateCounter(setPendingPayments, 23847)
      setHasAnimated(true)
    }, 500)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [hasAnimated])

  const handleQuickAction = (action: string) => {
    setQuickActionType(action)
  }
  const handleCloseQuickAction = () => {
    setQuickActionType(null)
  }



  return (
    <div className="min-h-screen bg-background">
      {/* Top bar with search and notifications */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">Dashboard</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-10 w-64"
              />
            </div>

            <Button variant="ghost" size="icon" className="relative" onClick={() => setNotifications(0)}>
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500">
                  {notifications}
                </Badge>
              )}
            </Button>

            <ThemeToggle />

            <div className="h-8 w-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Success notification */}
      {showQuickAction && (
        <div className="fixed top-20 right-4 z-50 animate-slide-in-right">
          <Card className="border-green-200 bg-green-50 shadow-lg">
            <CardContent className="p-4 flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-medium">Action completed successfully!</span>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Content */}
      <div className="p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl bg-gradient-to-r from-primary via-primary/90 to-primary/80">
            <div className="relative z-10">
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-3xl font-bold">Welcome back, Ankit!</h1>
                <Sparkles className="h-6 w-6 text-yellow-300 animate-pulse" />
              </div>
              <p className="text-primary-foreground/90 mb-6">
                Here's what's happening with your business today. You're doing great! 🚀
              </p>
              <div className="flex flex-wrap gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-white text-primary hover:bg-gray-100 shadow-lg">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      View Reports
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Business Reports</DialogTitle>
                      <DialogDescription>
                        Choose from various reports to analyze your business performance.
                      </DialogDescription>
                    </DialogHeader>
                    <Tabs defaultValue="revenue" className="w-full" onValueChange={(tab) => {
                      setShowQuickAction(true);
                      setTimeout(() => setShowQuickAction(false), 2000);
                    }}>
                      <div className="mb-4">
                        <TabsList className="flex gap-4 justify-center">
                          <TabsTrigger value="revenue" className="px-6 py-2 rounded-lg">Revenue</TabsTrigger>
                          <TabsTrigger value="employees" className="px-6 py-2 rounded-lg">Employees</TabsTrigger>
                          <TabsTrigger value="inventory" className="px-6 py-2 rounded-lg">Inventory</TabsTrigger>
                        </TabsList>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <TabsContent value="revenue" className="space-y-6">
                          <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-medium">Monthly Revenue</span>
                              <span className="font-bold text-xl">$124,563</span>
                            </div>
                            <Progress value={85} className="h-3" />
                          </div>
                        </TabsContent>
                        <TabsContent value="employees" className="space-y-6">
                          <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-medium">Active Employees</span>
                              <span className="font-bold text-xl">247</span>
                            </div>
                            <Progress value={92} className="h-3" />
                          </div>
                        </TabsContent>
                        <TabsContent value="inventory" className="space-y-6">
                          <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-medium">Stock Level</span>
                              <span className="font-bold text-xl">78%</span>
                            </div>
                            <Progress value={78} className="h-3" />
                          </div>
                        </TabsContent>
                      </div>
                    </Tabs>
                  </DialogContent>
                </Dialog>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary bg-transparent">
                      Quick Actions
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => handleQuickAction("invoice")}> 
                      <FileText className="mr-2 h-4 w-4" />
                      Create Invoice
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleQuickAction("employee")}> 
                      <UserCheck className="mr-2 h-4 w-4" />
                      Add Employee
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleQuickAction("product")}> 
                      <Package className="mr-2 h-4 w-4" />
                      Add Product
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleQuickAction("payment")}> 
                      <CreditCard className="mr-2 h-4 w-4" />
                      Add Payment
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
      {/* Quick Action Modal */}
      {quickActionType === "invoice" && (
        <Dialog open onOpenChange={handleCloseQuickAction}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Invoice</DialogTitle>
              <DialogDescription>Fill in the details to create a new invoice.</DialogDescription>
            </DialogHeader>
            <form className="space-y-4">
              <input type="text" placeholder="Invoice #" className="border px-2 py-1 w-full" />
              <input type="text" placeholder="Client Name" className="border px-2 py-1 w-full" />
              <input type="number" placeholder="Amount" className="border px-2 py-1 w-full" />
              <input type="date" className="border px-2 py-1 w-full" />
              <Button type="submit" className="w-full">Create Invoice</Button>
            </form>
          </DialogContent>
        </Dialog>
      )}
      {quickActionType === "employee" && (
        <Dialog open onOpenChange={handleCloseQuickAction}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Employee</DialogTitle>
              <DialogDescription>Enter details to add a new employee.</DialogDescription>
            </DialogHeader>
            <form className="space-y-4">
              <input type="text" placeholder="Employee Name" className="border px-2 py-1 w-full" />
              <input type="email" placeholder="Email" className="border px-2 py-1 w-full" />
              <input type="text" placeholder="Position" className="border px-2 py-1 w-full" />
              <Button type="submit" className="w-full">Add Employee</Button>
            </form>
          </DialogContent>
        </Dialog>
      )}
      {quickActionType === "product" && (
        <Dialog open onOpenChange={handleCloseQuickAction}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Product</DialogTitle>
              <DialogDescription>Enter details to add a new product.</DialogDescription>
            </DialogHeader>
            <form className="space-y-4">
              <input type="text" placeholder="Product Name" className="border px-2 py-1 w-full" />
              <input type="text" placeholder="SKU" className="border px-2 py-1 w-full" />
              <input type="number" placeholder="Stock" className="border px-2 py-1 w-full" />
              <Button type="submit" className="w-full">Add Product</Button>
            </form>
          </DialogContent>
        </Dialog>
      )}
      {quickActionType === "payment" && (
        <Dialog open onOpenChange={handleCloseQuickAction}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Payment</DialogTitle>
              <DialogDescription>Enter details to add a new payment.</DialogDescription>
            </DialogHeader>
            <form className="space-y-4">
              <input type="text" placeholder="Payment ID" className="border px-2 py-1 w-full" />
              <input type="text" placeholder="Payee Name" className="border px-2 py-1 w-full" />
              <input type="number" placeholder="Amount" className="border px-2 py-1 w-full" />
              <input type="date" className="border px-2 py-1 w-full" />
              <select className="border px-2 py-1 w-full">
                <option value="">Status</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
              <Button type="submit" className="w-full">Add Payment</Button>
            </form>
          </DialogContent>
        </Dialog>
      )}
              </div>
            </div>

            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32 animate-float"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mb-16 animate-float-delay"></div>
            <div className="absolute top-1/2 left-0 w-16 h-16 bg-white opacity-5 rounded-full -ml-8 animate-pulse"></div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold">${revenue.toLocaleString()}</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 mr-1 animate-bounce" />
                    +12.5% from last month
                  </p>
                  <Progress value={85} className="mt-2 h-1" />
                </div>
                <div className="h-12 w-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Employees</p>
                  <p className="text-2xl font-bold">{employees}</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <UserCheck className="h-4 w-4 mr-1 animate-pulse" />5 new this month
                  </p>
                  <Progress value={92} className="mt-2 h-1" />
                </div>
                <div className="h-12 w-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Inventory Items</p>
                  <p className="text-2xl font-bold">{inventory}</p>
                  <p className="text-sm text-orange-600 flex items-center mt-1">
                    <Package className="h-4 w-4 mr-1 animate-pulse" />23 low stock
                  </p>
                  <Progress value={78} className="mt-2 h-1" />
                </div>
                <div className="h-12 w-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <Package className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group cursor-pointer" onClick={() => setQuickActionType("pendingPayments")}> 
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Payments</p>
                  <p className="text-2xl font-bold">${payments.toLocaleString()}</p>
                  <p className="text-sm text-red-600 flex items-center mt-1">
                    <Clock className="h-4 w-4 mr-1 animate-pulse" />12 overdue
                  </p>
                  <Progress value={65} className="mt-2 h-1" />
                </div>
                <div className="h-12 w-12 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
      {quickActionType === "pendingPayments" && (
        <Dialog open onOpenChange={handleCloseQuickAction}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Pending Payments Details</DialogTitle>
              <DialogDescription>Here are your overdue and pending payments.</DialogDescription>
            </DialogHeader>
            <table className="min-w-full border mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1">Payment ID</th>
                  <th className="border px-2 py-1">Payee</th>
                  <th className="border px-2 py-1">Amount</th>
                  <th className="border px-2 py-1">Due Date</th>
                  <th className="border px-2 py-1">Status</th>
                  <th className="border px-2 py-1">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">PAY-001</td>
                  <td className="border px-2 py-1">ABC Corp</td>
                  <td className="border px-2 py-1">₹10,000</td>
                  <td className="border px-2 py-1">2025-08-10</td>
                  <td className="border px-2 py-1 text-red-600">Overdue</td>
                  <td className="border px-2 py-1 text-blue-600">Payable</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">PAY-002</td>
                  <td className="border px-2 py-1">XYZ Ltd</td>
                  <td className="border px-2 py-1">₹5,000</td>
                  <td className="border px-2 py-1">2025-08-15</td>
                  <td className="border px-2 py-1 text-yellow-600">Pending</td>
                  <td className="border px-2 py-1 text-green-600">Receivable</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">PAY-003</td>
                  <td className="border px-2 py-1">LMN Pvt</td>
                  <td className="border px-2 py-1">₹2,500</td>
                  <td className="border px-2 py-1">2025-08-18</td>
                  <td className="border px-2 py-1 text-yellow-600">Pending</td>
                  <td className="border px-2 py-1 text-green-600">Receivable</td>
                </tr>
              </tbody>
            </table>
          </DialogContent>
        </Dialog>
      )}
        </div>

        {/* Recent Activity and Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New employee added</p>
                    <p className="text-xs text-muted-foreground">Sarah Johnson joined the team</p>
                  </div>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Invoice generated</p>
                    <p className="text-xs text-muted-foreground">Invoice #INV-2024-001 created</p>
                  </div>
                  <span className="text-xs text-muted-foreground">4 hours ago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Low stock alert</p>
                    <p className="text-xs text-muted-foreground">Product XYZ is running low</p>
                  </div>
                  <span className="text-xs text-muted-foreground">6 hours ago</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Performance Metrics</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Sales Target</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Customer Satisfaction</span>
                  <span className="text-sm font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2" />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Employee Productivity</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
