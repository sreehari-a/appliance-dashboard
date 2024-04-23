import { Suspense, lazy } from "react";

const DeviceInfo = lazy(() => import("./"));

const DeviceInfoPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DeviceInfo />
    </Suspense>
  );
};

export default DeviceInfoPage;
