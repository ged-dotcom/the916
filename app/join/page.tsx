import { Suspense } from "react";
import JoinClient from "./joinclient";

export default function JoinPage() {
  return (
    <Suspense fallback={null}>
      <JoinClient />
    </Suspense>
  );
}