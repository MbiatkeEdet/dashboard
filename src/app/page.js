"use client"

import { useState } from "react"
import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  CreditCard,
  DollarSign,
  Home,
  LucideLineChart,
  Menu,
  Plus,
  Settings,
  Star,
  Wallet,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { ThemeProvider } from "next-themes";
import  { CryptoSearch } from "@/components/CryptoSearch";

export default function Dashboard() {
  const [, setActiveTab] = useState("stocks")

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex min-h-screen flex-col bg-black">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
                  <LucideLineChart className="h-6 w-6" />
                  <span>FinanceDash</span>
                </Link>
                <Link href="#" className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
                <Link href="/markets" className="flex items-center gap-2">
                  <LucideLineChart className="h-5 w-5" />
                  <span>Markets</span>
                </Link>
                <Link href="/portfolio" className="flex items-center gap-2">
                  <Wallet className="h-5 w-5" />
                  <span>Portfolio</span>
                </Link>
                <Link href="/watchlist" className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  <span>Watchlist</span>
                </Link>
                <Link href="#" className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Transactions</span>
                </Link>
                <Link href="" className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
            <LucideLineChart className="h-6 w-6" />
            <span>Mbiatke Nkanta Dashboard</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <CryptoSearch />
            <form className="relative hidden md:flex">
              {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-64 rounded-lg bg-background pl-8" /> */}
            </form>
            
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1">
                  My Account
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <div className="grid flex-1 md:grid-cols-[240px_1fr]">
          <aside className="hidden border-r bg-background md:block">
            <nav className="grid gap-6 p-6 text-sm font-medium">
              <Link href="#" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              <Link href="/markets" className="flex items-center gap-2 text-primary">
                <LucideLineChart className="h-4 w-4" />
                <span>Markets</span>
              </Link>
              <Link href="/portfolio" className="flex items-center gap-2">
                <Wallet className="h-4 w-4" />
                <span>Portfolio</span>
              </Link>
              <Link href="/watchlist" className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>Watchlist</span>
              </Link>
              <Link href="#" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span>Transactions</span>
              </Link>
              <Link href="#" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </nav>
          </aside>
          <main className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight bg-yellow-600">Financial Dashboard</h1>
                <p className="text-muted-foreground">Track your investments and market trends in real-time.</p>
              </div>
              <Button className="w-full md:w-auto">
                <Plus className="mr-2 h-4 w-4" />
                Add Investment
              </Button>
            </div>
            <Tabs defaultValue="stocks" onValueChange={setActiveTab}>
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="stocks">Stocks</TabsTrigger>
                  <TabsTrigger value="crypto">Cryptocurrency</TabsTrigger>
                </TabsList>
                <div className="hidden items-center gap-2 md:flex">
                  <Button variant="outline" size="sm">
                    Day
                  </Button>
                  <Button variant="outline" size="sm">
                    Week
                  </Button>
                  <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                    Month
                  </Button>
                  <Button variant="outline" size="sm">
                    Year
                  </Button>
                </div>
              </div>
              <TabsContent value="stocks" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$45,231.89</div>
                      <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Todays Change</CardTitle>
                      <LucideLineChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-2xl font-bold text-emerald-500">
                        +$892.40
                        <ArrowUp className="ml-1 h-4 w-4" />
                      </div>
                      <p className="text-xs text-muted-foreground">+2.5% today</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Top Performer</CardTitle>
                      <Star className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">AAPL</div>
                      <p className="text-xs text-muted-foreground">+4.3% today</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Market Status</CardTitle>
                      <LucideLineChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">Bullish</div>
                      <p className="text-xs text-muted-foreground">S&P 500 +1.2%</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Portfolio Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <ChartContainer
                        config={{
                          portfolio: {
                            label: "Portfolio",
                            color: "hsl(var(--chart-1))",
                          },
                          benchmark: {
                            label: "S&P 500",
                            color: "hsl(var(--chart-2))",
                          },
                        }}
                        className="aspect-[4/3]"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            data={[
                              { date: "Jan", portfolio: 2500, benchmark: 2400 },
                              { date: "Feb", portfolio: 3000, benchmark: 2800 },
                              { date: "Mar", portfolio: 3200, benchmark: 2900 },
                              { date: "Apr", portfolio: 3800, benchmark: 3200 },
                              { date: "May", portfolio: 4200, benchmark: 3500 },
                              { date: "Jun", portfolio: 4500, benchmark: 3800 },
                              { date: "Jul", portfolio: 4700, benchmark: 4000 },
                              { date: "Aug", portfolio: 5200, benchmark: 4300 },
                              { date: "Sep", portfolio: 5600, benchmark: 4500 },
                              { date: "Oct", portfolio: 6100, benchmark: 4800 },
                              { date: "Nov", portfolio: 6500, benchmark: 5100 },
                              { date: "Dec", portfolio: 7000, benchmark: 5400 },
                            ]}
                            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                          >
                            <XAxis
                              dataKey="date"
                              tickLine={false}
                              axisLine={false}
                              tickMargin={10}
                              padding={{ left: 10 }}
                            />
                            <YAxis
                              tickLine={false}
                              axisLine={false}
                              tickMargin={10}
                              tickFormatter={(value) => `$${value}`}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Line
                              type="monotone"
                              dataKey="portfolio"
                              strokeWidth={2}
                              activeDot={{ r: 6 }}
                              dot={false}
                              stroke="var(--color-portfolio)"
                            />
                            <Line
                              type="monotone"
                              dataKey="benchmark"
                              strokeWidth={2}
                              activeDot={{ r: 6 }}
                              dot={false}
                              stroke="var(--color-benchmark)"
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Top Holdings</CardTitle>
                      <CardDescription>Your most valuable investments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-16 text-sm font-medium">AAPL</div>
                          <div className="flex-1">
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div className="h-2 rounded-full bg-primary" style={{ width: "35%" }} />
                            </div>
                          </div>
                          <div className="w-16 text-right text-sm">35%</div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-16 text-sm font-medium">MSFT</div>
                          <div className="flex-1">
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div className="h-2 rounded-full bg-primary" style={{ width: "25%" }} />
                            </div>
                          </div>
                          <div className="w-16 text-right text-sm">25%</div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-16 text-sm font-medium">AMZN</div>
                          <div className="flex-1">
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div className="h-2 rounded-full bg-primary" style={{ width: "15%" }} />
                            </div>
                          </div>
                          <div className="w-16 text-right text-sm">15%</div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-16 text-sm font-medium">GOOGL</div>
                          <div className="flex-1">
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div className="h-2 rounded-full bg-primary" style={{ width: "12%" }} />
                            </div>
                          </div>
                          <div className="w-16 text-right text-sm">12%</div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-16 text-sm font-medium">TSLA</div>
                          <div className="flex-1">
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div className="h-2 rounded-full bg-primary" style={{ width: "8%" }} />
                            </div>
                          </div>
                          <div className="w-16 text-right text-sm">8%</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Stock Transactions</CardTitle>
                    <CardDescription>Your recent stock purchases and sales</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Symbol</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Shares</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead className="text-right">Total</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">AAPL</TableCell>
                          <TableCell className="text-emerald-500">Buy</TableCell>
                          <TableCell>10</TableCell>
                          <TableCell>$182.52</TableCell>
                          <TableCell className="text-right">$1,825.20</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">MSFT</TableCell>
                          <TableCell className="text-emerald-500">Buy</TableCell>
                          <TableCell>5</TableCell>
                          <TableCell>$415.32</TableCell>
                          <TableCell className="text-right">$2,076.60</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">TSLA</TableCell>
                          <TableCell className="text-rose-500">Sell</TableCell>
                          <TableCell>3</TableCell>
                          <TableCell>$177.75</TableCell>
                          <TableCell className="text-right">$533.25</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">AMZN</TableCell>
                          <TableCell className="text-emerald-500">Buy</TableCell>
                          <TableCell>2</TableCell>
                          <TableCell>$178.25</TableCell>
                          <TableCell className="text-right">$356.50</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">GOOGL</TableCell>
                          <TableCell className="text-emerald-500">Buy</TableCell>
                          <TableCell>1</TableCell>
                          <TableCell>$175.55</TableCell>
                          <TableCell className="text-right">$175.55</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Transactions
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="crypto" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Crypto Portfolio</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$28,459.23</div>
                      <p className="text-xs text-muted-foreground">-5.2% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Todays Change</CardTitle>
                      <LucideLineChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-2xl font-bold text-rose-500">
                        -$1,245.80
                        <ArrowDown className="ml-1 h-4 w-4" />
                      </div>
                      <p className="text-xs text-muted-foreground">-4.2% today</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Top Performer</CardTitle>
                      <Star className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">SOL</div>
                      <p className="text-xs text-muted-foreground">+8.1% today</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Market Status</CardTitle>
                      <LucideLineChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">Bearish</div>
                      <p className="text-xs text-muted-foreground">BTC -2.8%</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Bitcoin Price</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <ChartContainer
                        config={{
                          price: {
                            label: "Price",
                            color: "hsl(var(--chart-1))",
                          },
                          volume: {
                            label: "Volume",
                            color: "hsl(var(--chart-3))",
                          },
                        }}
                        className="aspect-[4/3]"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart
                            data={[
                              { date: "Jan", price: 42000, volume: 28000 },
                              { date: "Feb", price: 46000, volume: 32000 },
                              { date: "Mar", price: 44000, volume: 30000 },
                              { date: "Apr", price: 48000, volume: 34000 },
                              { date: "May", price: 51000, volume: 36000 },
                              { date: "Jun", price: 58000, volume: 42000 },
                              { date: "Jul", price: 62000, volume: 46000 },
                              { date: "Aug", price: 68000, volume: 52000 },
                              { date: "Sep", price: 64000, volume: 48000 },
                              { date: "Oct", price: 60000, volume: 44000 },
                              { date: "Nov", price: 56000, volume: 40000 },
                              { date: "Dec", price: 52000, volume: 38000 },
                            ]}
                            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                          >
                            <XAxis
                              dataKey="date"
                              tickLine={false}
                              axisLine={false}
                              tickMargin={10}
                              padding={{ left: 10 }}
                            />
                            <YAxis
                              tickLine={false}
                              axisLine={false}
                              tickMargin={10}
                              tickFormatter={(value) => `$${value}`}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Area
                              type="monotone"
                              dataKey="price"
                              strokeWidth={2}
                              stroke="var(--color-price)"
                              fill="var(--color-price)"
                              fillOpacity={0.1}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Top Crypto Holdings</CardTitle>
                      <CardDescription>Your cryptocurrency portfolio</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-16 text-sm font-medium">BTC</div>
                          <div className="flex-1">
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div className="h-2 rounded-full bg-primary" style={{ width: "45%" }} />
                            </div>
                          </div>
                          <div className="w-16 text-right text-sm">45%</div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-16 text-sm font-medium">ETH</div>
                          <div className="flex-1">
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div className="h-2 rounded-full bg-primary" style={{ width: "30%" }} />
                            </div>
                          </div>
                          <div className="w-16 text-right text-sm">30%</div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-16 text-sm font-medium">SOL</div>
                          <div className="flex-1">
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div className="h-2 rounded-full bg-primary" style={{ width: "15%" }} />
                            </div>
                          </div>
                          <div className="w-16 text-right text-sm">15%</div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-16 text-sm font-medium">ADA</div>
                          <div className="flex-1">
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div className="h-2 rounded-full bg-primary" style={{ width: "5%" }} />
                            </div>
                          </div>
                          <div className="w-16 text-right text-sm">5%</div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-16 text-sm font-medium">DOT</div>
                          <div className="flex-1">
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div className="h-2 rounded-full bg-primary" style={{ width: "5%" }} />
                            </div>
                          </div>
                          <div className="w-16 text-right text-sm">5%</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Crypto Transactions</CardTitle>
                    <CardDescription>Your recent cryptocurrency purchases and sales</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Coin</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead className="text-right">Total</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">BTC</TableCell>
                          <TableCell className="text-emerald-500">Buy</TableCell>
                          <TableCell>0.25</TableCell>
                          <TableCell>$52,345.67</TableCell>
                          <TableCell className="text-right">$13,086.42</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">ETH</TableCell>
                          <TableCell className="text-emerald-500">Buy</TableCell>
                          <TableCell>2.5</TableCell>
                          <TableCell>$2,876.54</TableCell>
                          <TableCell className="text-right">$7,191.35</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">SOL</TableCell>
                          <TableCell className="text-rose-500">Sell</TableCell>
                          <TableCell>10</TableCell>
                          <TableCell>$102.34</TableCell>
                          <TableCell className="text-right">$1,023.40</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">ADA</TableCell>
                          <TableCell className="text-emerald-500">Buy</TableCell>
                          <TableCell>100</TableCell>
                          <TableCell>$0.45</TableCell>
                          <TableCell className="text-right">$45.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">DOT</TableCell>
                          <TableCell className="text-emerald-500">Buy</TableCell>
                          <TableCell>25</TableCell>
                          <TableCell>$5.67</TableCell>
                          <TableCell className="text-right">$141.75</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Transactions
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

