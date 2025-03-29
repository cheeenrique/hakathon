import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SalesHistoryItem = ({ sale }) => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Venda</h3>
          <p className="text-sm text-muted-foreground">
            Entrega na cooperativa
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span
            className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800`}
          >
            {sale.status}
          </span>
        </div>
      </CardHeader>
      <img
        src={sale.image}
        alt="Sale Item"
        className="w-full h-48 object-cover rounded-md mt-4"
      />
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium">Material:</p>
            <p className="text-sm text-muted-foreground">{sale.material}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Peso aproximado:</p>
            <p className="text-sm text-muted-foreground">
              {sale.approximateWeight}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Responsável pela entrega:</p>
            <p className="text-sm text-muted-foreground">
              {sale.responsibleForDelivery}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Entrega em:</p>
            <p className="text-sm text-muted-foreground">{sale.deliveryDate}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Vendeu para:</p>
            <p className="text-sm text-muted-foreground">{sale.soldTo}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Lucro estimado:</p>
            <p className="text-sm text-green-500 font-medium">
              {sale.estimatedProfit}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const SalesHistory = ({ sales }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {sales.map((sale, index) => (
        <SalesHistoryItem key={index} sale={sale} />
      ))}
    </div>
  );
};

export default SalesHistory;
