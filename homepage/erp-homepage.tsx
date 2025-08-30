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

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(3)
  const [isLoading, setIsLoading] = useState(false)
  const [revenue, setRevenue] = useState(0)
  const [employees, setEmployees] = useState(0)
  const [inventory, setInventory] = useState(0)
  const [payments, setPendingPayments] = useState(0)
  const [showQuickAction, setShowQuickAction] = useState(false)

  // Animated counters
  useEffect(() => {
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

    setTimeout(() => {
      animateCounter(setRevenue, 124563)
      animateCounter(setEmployees, 247)
      animateCounter(setInventory, 1429)
      animateCounter(setPendingPayments, 23847)
    }, 500)
  }, [])

  const handleQuickAction = (action: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowQuickAction(true)
      setTimeout(() => setShowQuickAction(false), 3000)
    }, 1500)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-slate-50 via-white to-gray-100"
      }`}
    >
      {/* Floating particles effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-orange-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-50"></div>
      </div>

      {/* Header */}
      <header
        className={`backdrop-blur-md border-b shadow-lg transition-all duration-300 ${
          isDarkMode ? "bg-gray-900/80 border-gray-700" : "bg-white/80 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 group">
                <div className="relative">
                  <Building2 className="h-8 w-8 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
                <span className={`text-xl font-bold transition-colors ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  ERPro
                </span>
                <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white animate-pulse">Pro</Badge>
              </div>
              <nav className="hidden md:flex space-x-8 ml-8">
                <Link
                  href="#"
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? "text-emerald-400 hover:text-emerald-300" : "text-gray-700 hover:text-emerald-600"
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className={`transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? "text-gray-300 hover:text-emerald-400" : "text-gray-500 hover:text-emerald-600"
                  }`}
                >
                  Reports
                </Link>
                <Link
                  href="#"
                  className={`transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? "text-gray-300 hover:text-emerald-400" : "text-gray-500 hover:text-emerald-600"
                  }`}
                >
                  Settings
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
                    isDarkMode ? "text-gray-400" : "text-gray-400"
                  }`}
                />
                <Input
                  placeholder="Search..."
                  className={`pl-10 w-64 transition-all duration-300 focus:w-72 ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      : "bg-gray-50 border-gray-200"
                  }`}
                />
              </div>

              <Button variant="ghost" size="icon" className="relative group" onClick={() => setNotifications(0)}>
                <Bell className="h-5 w-5 group-hover:animate-swing" />
                {notifications > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 animate-bounce">
                    {notifications}
                  </Badge>
                )}
              </Button>

              <Button variant="ghost" size="icon" onClick={toggleTheme} className="group">
                {isDarkMode ? (
                  <Sun className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                ) : (
                  <Moon className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                )}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="group">
                    <Settings className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={isDarkMode ? "bg-gray-800 border-gray-700" : ""}>
                  <DropdownMenuItem className="cursor-pointer">
                    <UserCheck className="mr-2 h-4 w-4" />
                    Profile Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    System Settings
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="h-8 w-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div
            className={`rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 ${
              isDarkMode
                ? "bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800"
                : "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700"
            }`}
          >
            <div className="relative z-10">
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-3xl font-bold animate-fade-in">Welcome back, John!</h1>
                <Sparkles className="h-6 w-6 text-yellow-300 animate-pulse" />
              </div>
              <p className="text-emerald-100 mb-6 animate-fade-in-delay">
                Here's what's happening with your business today. You're doing great! 🚀
              </p>
              <div className="flex flex-wrap gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-white text-emerald-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      View Reports
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className={isDarkMode ? "bg-gray-800 border-gray-700" : ""}>
                    <DialogHeader>
                      <DialogTitle className={isDarkMode ? "text-white" : ""}>Business Reports</DialogTitle>
                      <DialogDescription>
                        Choose from various reports to analyze your business performance.
                      </DialogDescription>
                    </DialogHeader>
                    <Tabs defaultValue="revenue" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="revenue">Revenue</TabsTrigger>
                        <TabsTrigger value="employees">Employees</TabsTrigger>
                        <TabsTrigger value="inventory">Inventory</TabsTrigger>
                      </TabsList>
                      <TabsContent value="revenue" className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Monthly Revenue</span>
                            <span className="font-bold">$124,563</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                      </TabsContent>
                      <TabsContent value="employees" className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Active Employees</span>
                            <span className="font-bold">247</span>
                          </div>
                          <Progress value={92} className="h-2" />
                        </div>
                      </TabsContent>
                      <TabsContent value="inventory" className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Stock Level</span>
                            <span className="font-bold">78%</span>
                          </div>
                          <Progress value={78} className="h-2" />
                        </div>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent hover:scale-105 transition-all duration-300"
                    >
                      Quick Actions
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => handleQuickAction("invoice")} className="cursor-pointer">
                      <FileText className="mr-2 h-4 w-4" />
                      Create Invoice
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleQuickAction("employee")} className="cursor-pointer">
                      <UserCheck className="mr-2 h-4 w-4" />
                      Add Employee
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleQuickAction("product")} className="cursor-pointer">
                      <Package className="mr-2 h-4 w-4" />
                      Add Product
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
          <Card
            className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    Total Revenue
                  </p>
                  <p className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    ${revenue.toLocaleString()}
                  </p>
                  <p className="text-sm text-emerald-600 flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 mr-1 animate-bounce" />
                    +12.5% from last month
                  </p>
                  <Progress value={85} className="mt-2 h-1" />
                </div>
                <div className="h-12 w-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    Active Employees
                  </p>
                  <p className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{employees}</p>
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

          <Card
            className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    Inventory Items
                  </p>
                  <p className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {inventory.toLocaleString()}
                  </p>
                  <p className="text-sm text-orange-600 flex items-center mt-1">
                    <AlertTriangle className="h-4 w-4 mr-1 animate-pulse" />
                    23 low stock alerts
                  </p>
                  <Progress value={78} className="mt-2 h-1" />
                </div>
                <div className="h-12 w-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <Package className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    Pending Payments
                  </p>
                  <p className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    ${payments.toLocaleString()}
                  </p>
                  <p className="text-sm text-red-600 flex items-center mt-1">
                    <Clock className="h-4 w-4 mr-1 animate-spin" />
                    12 overdue invoices
                  </p>
                  <Progress value={45} className="mt-2 h-1" />
                </div>
                <div className="h-12 w-12 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Modules */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Core Modules</h2>
            <Button variant="outline" size="sm" className="hover:scale-105 transition-transform bg-transparent">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Payment Module */}
            <Card
              className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer relative overflow-hidden ${
                isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex space-x-2">
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 animate-pulse">
                      Active
                    </Badge>
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
                      <Star className="h-3 w-3 mr-1" />
                      Pro
                    </Badge>
                  </div>
                </div>
                <CardTitle className={`text-xl ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Payment Management
                </CardTitle>
                <CardDescription className={isDarkMode ? "text-gray-300" : ""}>
                  Handle invoices, payments, and financial transactions with advanced analytics
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3 mb-4">
                  <div className={`flex items-center text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    <FileText className="h-4 w-4 mr-2 text-emerald-500" />
                    <span>Invoice Generation</span>
                    <CheckCircle className="h-4 w-4 ml-auto text-green-500" />
                  </div>
                  <div className={`flex items-center text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    <BarChart3 className="h-4 w-4 mr-2 text-emerald-500" />
                    <span>Payment Tracking</span>
                    <CheckCircle className="h-4 w-4 ml-auto text-green-500" />
                  </div>
                  <div className={`flex items-center text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    <DollarSign className="h-4 w-4 mr-2 text-emerald-500" />
                    <span>Financial Reports</span>
                    <CheckCircle className="h-4 w-4 ml-auto text-green-500" />
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs">
                    <span>Module Usage</span>
                    <span>87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
                <Button
                  className="w-full bg-emerald-600 hover:bg-emerald-700 hover:scale-105 transition-all duration-300 shadow-lg"
                  onClick={() => handleQuickAction("payment")}
                  disabled={isLoading}
                >
                  {isLoading ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : <Zap className="mr-2 h-4 w-4" />}
                  Access Payment Module
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* HR Module */}
            <Card
              className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer relative overflow-hidden ${
                isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex space-x-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 animate-pulse">
                      Active
                    </Badge>
                    <Badge className="bg-gradient-to-r from-purple-400 to-pink-400 text-white">
                      <Award className="h-3 w-3 mr-1" />
                      Elite
                    </Badge>
                  </div>
                </div>
                <CardTitle className={`text-xl ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Human Resources
                </CardTitle>
                <CardDescription className={isDarkMode ? "text-gray-300" : ""}>
                  Manage employees, payroll, and HR operations with smart automation
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3 mb-4">
                  <div className={`flex items-center text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    <UserCheck className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Employee Management</span>
                    <CheckCircle className="h-4 w-4 ml-auto text-green-500" />
                  </div>
                  <div className={`flex items-center text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Attendance Tracking</span>
                    <CheckCircle className="h-4 w-4 ml-auto text-green-500" />
                  </div>
                  <div className={`flex items-center text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    <DollarSign className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Payroll Processing</span>
                    <CheckCircle className="h-4 w-4 ml-auto text-green-500" />
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs">
                    <span>Module Usage</span>
                    <span>94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg"
                  onClick={() => handleQuickAction("hr")}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Target className="mr-2 h-4 w-4" />
                  )}
                  Access HR Module
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Inventory Module */}
            <Card
              className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer relative overflow-hidden ${
                isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex space-x-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700 animate-pulse">
                      Active
                    </Badge>
                    <Badge className="bg-gradient-to-r from-red-400 to-pink-400 text-white">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      Alert
                    </Badge>
                  </div>
                </div>
                <CardTitle className={`text-xl ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Inventory Management
                </CardTitle>
                <CardDescription className={isDarkMode ? "text-gray-300" : ""}>
                  Track stock levels, orders, and warehouse operations with real-time updates
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3 mb-4">
                  <div className={`flex items-center text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    <Package className="h-4 w-4 mr-2 text-orange-500" />
                    <span>Stock Management</span>
                    <AlertTriangle className="h-4 w-4 ml-auto text-orange-500" />
                  </div>
                  <div className={`flex items-center text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    <ShoppingCart className="h-4 w-4 mr-2 text-orange-500" />
                    <span>Order Processing</span>
                    <CheckCircle className="h-4 w-4 ml-auto text-green-500" />
                  </div>
                  <div className={`flex items-center text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    <BarChart3 className="h-4 w-4 mr-2 text-orange-500" />
                    <span>Inventory Reports</span>
                    <CheckCircle className="h-4 w-4 ml-auto text-green-500" />
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs">
                    <span>Stock Level</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700 hover:scale-105 transition-all duration-300 shadow-lg"
                  onClick={() => handleQuickAction("inventory")}
                  disabled={isLoading}
                >
                  {isLoading ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : <Eye className="mr-2 h-4 w-4" />}
                  Access Inventory Module
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card
            className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
            }`}
          >
            <CardHeader>
              <CardTitle className={`flex items-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                <Activity className="h-5 w-5 mr-2 text-emerald-600 animate-pulse" />
                Recent Activities
                <Badge className="ml-auto bg-emerald-100 text-emerald-700">Live</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer ${
                    isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      New invoice #INV-2024-001 created
                    </p>
                    <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>2 minutes ago</p>
                  </div>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
                <div
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer ${
                    isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      Employee Sarah Johnson clocked in
                    </p>
                    <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>15 minutes ago</p>
                  </div>
                  <UserCheck className="h-4 w-4 text-blue-500" />
                </div>
                <div
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer ${
                    isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="h-2 w-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      Low stock alert: Product ABC-123
                    </p>
                    <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>1 hour ago</p>
                  </div>
                  <AlertTriangle className="h-4 w-4 text-orange-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
            }`}
          >
            <CardHeader>
              <CardTitle className={`flex items-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                <Zap className="h-5 w-5 mr-2 text-emerald-600 animate-bounce" />
                Quick Actions
                <Badge className="ml-auto bg-gradient-to-r from-purple-400 to-pink-400 text-white">Smart</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className={`h-20 flex flex-col items-center justify-center space-y-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    isDarkMode ? "border-gray-600 hover:bg-gray-700" : "bg-transparent hover:bg-gray-50"
                  }`}
                  onClick={() => handleQuickAction("invoice")}
                  disabled={isLoading}
                >
                  <FileText className="h-6 w-6 text-emerald-600" />
                  <span className="text-xs font-medium">Create Invoice</span>
                </Button>
                <Button
                  variant="outline"
                  className={`h-20 flex flex-col items-center justify-center space-y-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    isDarkMode ? "border-gray-600 hover:bg-gray-700" : "bg-transparent hover:bg-gray-50"
                  }`}
                  onClick={() => handleQuickAction("employee")}
                  disabled={isLoading}
                >
                  <UserCheck className="h-6 w-6 text-blue-600" />
                  <span className="text-xs font-medium">Add Employee</span>
                </Button>
                <Button
                  variant="outline"
                  className={`h-20 flex flex-col items-center justify-center space-y-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    isDarkMode ? "border-gray-600 hover:bg-gray-700" : "bg-transparent hover:bg-gray-50"
                  }`}
                  onClick={() => handleQuickAction("product")}
                  disabled={isLoading}
                >
                  <Package className="h-6 w-6 text-orange-600" />
                  <span className="text-xs font-medium">Add Product</span>
                </Button>
                <Button
                  variant="outline"
                  className={`h-20 flex flex-col items-center justify-center space-y-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    isDarkMode ? "border-gray-600 hover:bg-gray-700" : "bg-transparent hover:bg-gray-50"
                  }`}
                  onClick={() => handleQuickAction("report")}
                  disabled={isLoading}
                >
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                  <span className="text-xs font-medium">View Reports</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
