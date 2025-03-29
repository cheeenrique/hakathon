import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Insights = ({ data }) => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Reciclai</h3>
          <p className="text-sm text-muted-foreground">Novo insight</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-gray-500"
        >
          <path d="M12 2L2 20h20L12 2Z" />
        </svg>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <p className="text-sm text-muted-foreground">{data.description}</p>
      </CardContent>
    </Card>
  );
};

export default Insights;
