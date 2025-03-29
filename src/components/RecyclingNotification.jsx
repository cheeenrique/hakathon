import { Button } from "@/components/ui/button";

const RecyclingNotification = ({ data }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <h3 className="text-lg font-semibold">{data.title}</h3>
      <p className="text-sm text-muted-foreground">{data.description}</p>
      <Button variant="outline" className="mt-4">
        + Reciclagem
      </Button>
    </div>
  );
};

export default RecyclingNotification;
