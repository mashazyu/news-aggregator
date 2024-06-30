import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

import ImageFallback from "./ImageFallback";

function SkeletonCard() {
  return (
    <Card className="flex flex-col justify-between">
      <ImageFallback />
      <CardHeader>
        <Skeleton className="h-16 flex-grow" />
        <Skeleton className="h-4 flex-grow" />
      </CardHeader>
      <Skeleton className="h-16 w-0" />

      <CardFooter>
        <Skeleton className="h-8 w-24" />
      </CardFooter>
    </Card>
  );
}

function Loader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8">
      {[...Array(10).keys()].map((i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export default Loader;
