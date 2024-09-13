'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const [items, setItems] = useState([
    { id: 1, name: 'Lawn Mower', description: 'Electric lawn mower, great condition' },
    { id: 2, name: 'Bicycle', description: 'Mountain bike, suitable for trails' },
    { id: 3, name: 'Tent', description: '4-person tent, waterproof' },
  ])
  const [newItem, setNewItem] = useState({ name: '', description: '' })

  const handleAddItem = (e) => {
    e.preventDefault()
    if (newItem.name && newItem.description) {
      setItems([...items, { id: items.length + 1, ...newItem }])
      setNewItem({ name: '', description: '' })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-card-foreground">Lending Marketplace</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-semibold mb-4 text-card-foreground">Available Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button>Contact Owner</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-card-foreground">Add New Item</h2>
          <form onSubmit={handleAddItem} className="space-y-4">
            <Input
              type="text"
              placeholder="Item Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              required
            />
            <Input
              type="text"
              placeholder="Item Description"
              value={newItem.description}
              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
              required
            />
            <Button type="submit">Add Item</Button>
          </form>
        </div>
      </main>
    </div>
  )
}