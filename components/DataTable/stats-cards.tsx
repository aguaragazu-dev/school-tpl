import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TableStats } from "../../types/data-table"

interface StatsCardsProps {
  stats: TableStats[]
  className?: string
}

export function StatsCards({ stats, className }: StatsCardsProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <div className={`grid gap-4 md:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: stat.color }}>
              {stat.value}
            </div>
            {stat.description && (
              <CardDescription>
                {stat.description}
              </CardDescription>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

