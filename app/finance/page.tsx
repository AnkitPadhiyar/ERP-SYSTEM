"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, TrendingUp, TrendingDown, CreditCard, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

declare global {
	interface Window {
		Razorpay: any
	}
}

const transactionData = [
	{
		id: "TXN001",
		date: "2024-01-15",
		description: "Office Supplies Purchase",
		amount: -1250.0,
		type: "Expense",
		category: "Operations",
		status: "Completed",
	},
	{
		id: "TXN002",
		date: "2024-01-14",
		description: "Client Payment - ABC Corp",
		amount: 15000.0,
		type: "Income",
		category: "Sales",
		status: "Completed",
	},
	{
		id: "TXN003",
		date: "2024-01-13",
		description: "Software License Renewal",
		amount: -2400.0,
		type: "Expense",
		category: "Technology",
		status: "Pending",
	},
	{
		id: "TXN004",
		date: "2024-01-12",
		description: "Consulting Services",
		amount: 8500.0,
		type: "Income",
		category: "Services",
		status: "Completed",
	},
]

export default function FinancePage() {
	const [paymentStatus, setPaymentStatus] = useState("")

	const getStatusBadge = (status: string) => {
		switch (status) {
			case "Completed":
				return (
					<Badge variant="default" className="bg-green-500">
						{status}
					</Badge>
				)
			case "Pending":
				return (
					<Badge variant="destructive" className="bg-yellow-500">
						{status}
					</Badge>
				)
			case "Failed":
				return <Badge variant="destructive">{status}</Badge>
			default:
				return <Badge variant="secondary">{status}</Badge>
		}
	}

	const getAmountDisplay = (amount: number, type: string) => {
		const isPositive = amount > 0
		return (
			<div className={`flex items-center ${isPositive ? "text-green-600" : "text-red-600"}`}>
				{isPositive ? <ArrowUpRight className="h-4 w-4 mr-1" /> : <ArrowDownRight className="h-4 w-4 mr-1" />}$
				{Math.abs(amount).toLocaleString()}
			</div>
		)
	}

	const handleRazorpayPayment = async () => {
		setPaymentStatus("")
		// Load Razorpay script
		if (!window.Razorpay) {
			const script = document.createElement("script")
			script.src = "https://checkout.razorpay.com/v1/checkout.js"
			script.async = true
			document.body.appendChild(script)
			script.onload = openRazorpay
			script.onerror = () => setPaymentStatus("Failed to load Razorpay script.")
		} else {
			openRazorpay()
		}
	}

	const openRazorpay = async () => {
		try {
			// Call backend API to create order (replace with your endpoint)
			const res = await fetch("/api/razorpay-order", { method: "POST" })
			if (!res.ok) {
				setPaymentStatus("Failed to create Razorpay order.")
				return
			}
			const data = await res.json()
			const options = {
				key: "rzp_test_RBCFBhNIZmKtC1", // Your Razorpay test key
				amount: data.amount,
				currency: data.currency,
				order_id: data.id,
				name: "KT System Payment",
				description: "Software Hosting Payment",
				handler: function (response: any) {
					setPaymentStatus("Payment Successful! Payment ID: " + response.razorpay_payment_id)
				},
				prefill: {
					name: "Test User",
					email: "test@example.com",
				},
				theme: { color: "#3399cc" },
			}
			const rzp = new window.Razorpay(options)
			rzp.open()
		} catch (err) {
			setPaymentStatus("Error initiating payment: " + String(err))
		}
	}

	return (
		<div className="flex-1 space-y-4 p-8 pt-6">
			<div className="flex items-center justify-between space-y-2">
				<h2 className="text-3xl font-bold tracking-tight">Finance & Accounting</h2>
				<div className="flex items-center space-x-2">
					<Button variant="outline">Export Report</Button>
					<Button>New Transaction</Button>
					<Button onClick={handleRazorpayPayment} className="bg-green-600 text-white">
						make Payment
					</Button>
				</div>
			</div>
			{paymentStatus && (
				<div className="my-4 p-4 bg-green-100 text-green-800 rounded">{paymentStatus}</div>
			)}

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
						<DollarSign className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">$145,231.89</div>
						<p className="text-xs text-muted-foreground">+20.1% from last month</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
						<TrendingDown className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">$52,847.32</div>
						<p className="text-xs text-muted-foreground">+12.5% from last month</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Net Profit</CardTitle>
						<TrendingUp className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">$92,384.57</div>
						<p className="text-xs text-muted-foreground">+25.3% from last month</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Cash Flow</CardTitle>
						<CreditCard className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">$234,567.89</div>
						<p className="text-xs text-muted-foreground">Available balance</p>
					</CardContent>
				</Card>
			</div>

			<Tabs defaultValue="overview" className="space-y-4">
				<TabsList>
					<TabsTrigger value="overview">Overview</TabsTrigger>
					<TabsTrigger value="transactions">Transactions</TabsTrigger>
					<TabsTrigger value="reports">Reports</TabsTrigger>
					<TabsTrigger value="budgets">Budgets</TabsTrigger>
				</TabsList>

				<TabsContent value="overview" className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
						<Card className="col-span-4">
							<CardHeader>
								<CardTitle>Financial Overview</CardTitle>
							</CardHeader>
							<CardContent className="pl-2">
								<Overview />
							</CardContent>
						</Card>
						<Card className="col-span-3">
							<CardHeader>
								<CardTitle>Recent Transactions</CardTitle>
								<CardDescription>Latest financial activities</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									{transactionData.slice(0, 5).map((transaction) => (
										<div key={transaction.id} className="flex items-center">
											<div className="ml-4 space-y-1">
												<p className="text-sm font-medium leading-none">{transaction.description}</p>
												<p className="text-sm text-muted-foreground">{transaction.category}</p>
											</div>
											<div className="ml-auto font-medium">
												{getAmountDisplay(transaction.amount, transaction.type)}
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</div>
				</TabsContent>

				<TabsContent value="transactions" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>Transaction History</CardTitle>
							<CardDescription>Complete list of all financial transactions</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableCaption>A list of your recent transactions.</TableCaption>
								<TableHeader>
									<TableRow>
										<TableHead>Transaction ID</TableHead>
										<TableHead>Date</TableHead>
										<TableHead>Description</TableHead>
										<TableHead>Category</TableHead>
										<TableHead>Amount</TableHead>
										<TableHead>Status</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{transactionData.map((transaction) => (
										<TableRow key={transaction.id}>
											<TableCell className="font-medium">{transaction.id}</TableCell>
											<TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
											<TableCell>{transaction.description}</TableCell>
											<TableCell>{transaction.category}</TableCell>
											<TableCell>{getAmountDisplay(transaction.amount, transaction.type)}</TableCell>
											<TableCell>{getStatusBadge(transaction.status)}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="reports" className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2">
						<Card>
							<CardHeader>
								<CardTitle>Profit & Loss Statement</CardTitle>
								<CardDescription>Monthly P&L summary</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-2">
									<div className="flex justify-between">
										<span>Total Revenue</span>
										<span className="font-medium">$145,231.89</span>
									</div>
									<div className="flex justify-between">
										<span>Total Expenses</span>
										<span className="font-medium">$52,847.32</span>
									</div>
									<div className="border-t pt-2">
										<div className="flex justify-between font-bold">
											<span>Net Profit</span>
											<span>$92,384.57</span>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Cash Flow Statement</CardTitle>
								<CardDescription>Monthly cash flow analysis</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-2">
									<div className="flex justify-between">
										<span>Operating Activities</span>
										<span className="font-medium">$85,234.56</span>
									</div>
									<div className="flex justify-between">
										<span>Investing Activities</span>
										<span className="font-medium">-$12,456.78</span>
									</div>
									<div className="flex justify-between">
										<span>Financing Activities</span>
										<span className="font-medium">$15,789.11</span>
									</div>
									<div className="border-t pt-2">
										<div className="flex justify-between font-bold">
											<span>Net Cash Flow</span>
											<span>$88,566.89</span>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</TabsContent>

				<TabsContent value="budgets" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>Budget Overview</CardTitle>
							<CardDescription>Track your budget performance across different categories</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div className="space-y-2">
									<div className="flex justify-between text-sm">
										<span>Marketing Budget</span>
										<span>$8,500 / $10,000</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
									</div>
								</div>
								<div className="space-y-2">
									<div className="flex justify-between text-sm">
										<span>Operations Budget</span>
										<span>$12,300 / $15,000</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div className="bg-green-600 h-2 rounded-full" style={{ width: "82%" }}></div>
									</div>
								</div>
								<div className="space-y-2">
									<div className="flex justify-between text-sm">
										<span>Technology Budget</span>
										<span>$18,750 / $20,000</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div className="bg-yellow-600 h-2 rounded-full" style={{ width: "94%" }}></div>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	)
}
