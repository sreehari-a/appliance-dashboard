import { render } from '@testing-library/react';
import { DeviceMonitoring } from '../DeviceMonitoring';
import { ThemeWrapper } from '../../../../utils';
import { DeviceInfoFields } from '../../config';
import { TestIds } from '../../../../components/FieldValue/FieldValue';
import { DeviceInfo } from '../../../Devices/types';
import { BillingCycle, DeviceStatus, DownloadStatus } from '../../../../constants/appConstants';

describe('DeviceMonitoring component', () => {
    const appliance: DeviceInfo = {
        serialNo: '123456',
        theatreName: 'Test Theatre',
        location: { city: 'Test City', state: 'Test State', country: 'Test Country' },
        deviceStatus: DeviceStatus.Online,
        downloadStatus: DownloadStatus.Succeeded,
        storage: '828 GB',
        ispPaymentResponsibility: "Qube",
        avgBandwidth: "1 Gbps",
        bandwidth: "812 Kbps",
        billingCycle: BillingCycle.monthly,
        osVersion: "5.2.1.3",
        planStartDate: "2023-10-01T10:00:00Z"
    };

    const renderFunction = ()=> (
        render(ThemeWrapper(<DeviceMonitoring appliance={appliance} />))
    )

    DeviceInfoFields.map(({ key, label, getValue }) => {
        test(`renders ${label} correctly`, async() => {
            const value = getValue
              ? getValue(appliance as DeviceInfo)
              : appliance?.[key as keyof typeof appliance];
            const { getByTestId } = renderFunction();
            expect(await getByTestId(`${TestIds.FIELD_VALUE}-${label}`)).toHaveTextContent(value as string);
        })
    });
});
