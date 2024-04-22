import { Suspense, lazy } from 'react';

const DeviceDashboard = lazy(() => import('./'));

const DeviceDashboardPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DeviceDashboard />
        </Suspense>
    );
};

export default DeviceDashboardPage;