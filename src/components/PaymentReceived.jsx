import { Card, CardContent, CardHeader } from "@/components/ui/card";

const PaymentReceived = ({ data }) => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Pagamento recebido</h3>
          <p className="text-sm text-muted-foreground">
            {data.orders} Pedidos{" "}
            <span className="text-green-500">{data.growthPercentage}</span>
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-green-500"
        >
          <path d="M12 2L2 20h20L12 2Z" />
        </svg>
      </CardHeader>
      <CardContent>
        <h1 className="text-3xl font-bold">{data.amount}</h1>
      </CardContent>
    </Card>
  );
};

export default PaymentReceived;
