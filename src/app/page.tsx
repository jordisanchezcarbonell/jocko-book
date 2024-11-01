import BookViewer from "@/components/BookViewer";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback="Loading...">
      <BookViewer />
    </Suspense>
  );
}
