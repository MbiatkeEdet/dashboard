import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button"

function page() {
  return (
    <div>
        <Link href="/transaction">
                <Card>
                  
                  <CardHeader className='mt-6'>
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
                </Link>
    </div>
  )
}

export default page