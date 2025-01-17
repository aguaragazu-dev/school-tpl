import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface DataSummaryProps {
  title: string;
  description: string;
  data: any[] | [];
  totalName: string;
  getTotal: (item: any) => number;
};

const DataSummary = ({
  title,
  description,
  data,
  totalName,
  getTotal, 
}: DataSummaryProps) => {
  const totalRevenue = data.reduce((acc, item) => {
    return acc + getTotal(item);
  }, 0)

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6">
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
        </div>
        <div className="flex">
          <button
            className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
          >
            <span className="text-xs text-muted-foreground">
              Total
            </span>
            <span className="text-lg font-bold leading-none sm:text-3xl">
              {data.length.toString().padStart(2, '0')}
            </span>
          </button>
          <button
            className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
          >
            <span className="text-xs text-muted-foreground">
              Total {totalName}
            </span>
            <span className="text-lg font-bold leading-none sm:text-3xl">
              {totalRevenue.toLocaleString()}
            </span>
          </button>
        </div>
      </CardHeader>
    </Card>
  )
}

export default DataSummary;

