import { useEffect, useRef, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Table from "../../components/Table";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { getColumns } from "./config";
import { Content, DashboardContainer, Header, StatusCountSection } from "./styled";
import { DeviceBasicInfo, StatusCount, StatusCountArray } from "./types";
import { DownloadStatus, DownloadStatusConfig } from "../../constants/appConstants";
import StatusText from "../../components/StatusText/statusText";
import { useNavigate } from "react-router-dom";

const queryClient = new QueryClient();

const Dashboard = () => {
  const [data, setData] = useState<DeviceBasicInfo[]>([]);
  const [statusCountArray, setStatusCountArray] = useState<StatusCountArray>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  let navigate = useNavigate();

  const { height: contentHeight } = useWindowDimensions(contentRef?.current);
  useEffect(() => {
    getDevices()
  }, []);

  const transformCount = (statusCount: StatusCount) => {
    const statusDisplayOrder = [DownloadStatus.Failed, DownloadStatus.Cancelled, DownloadStatus.Scheduled, DownloadStatus.Downloading, DownloadStatus.Succeeded];
    const statuses: StatusCountArray = statusDisplayOrder.map((status: DownloadStatus) => (
      {
        downloadStatus: status,
        count: statusCount[status] || 0,
      }
    ))
    setStatusCountArray(statuses);
  }
  const getDevices = async () => {
    const res = await fetch(
      `/api/v1/appliances`
    );
    const data: {data: DeviceBasicInfo[], metaData: {count: StatusCount}} = await res.json();
    setData(data?.data);
    transformCount(data?.metaData.count)
    return data;
  };
  const viewDeviceInfo = (serialNo: string) => {
    navigate(`/devices/${serialNo}`);
  }
  const columns = getColumns(viewDeviceInfo);
  const tableHeight = contentHeight ? contentHeight - 125 : 0;

  return (
    <DashboardContainer>
      <Header>Devices</Header>
      <Content ref={contentRef}>
        <StatusCountSection>
          {statusCountArray.map(({downloadStatus, count}) => {
            const config =
            (downloadStatus &&
              DownloadStatusConfig[
                downloadStatus as keyof typeof DownloadStatusConfig
              ]) ||
            {color: "transparent", label:  ""};
            return(
              <StatusText color={config?.color as string} label={`${count} ${config.label}`} />
            )
          })}
        </StatusCountSection>
        <QueryClientProvider client={queryClient}>
          <Table
            height={tableHeight}
            data={data}
            columns={columns}
          />
        </QueryClientProvider>
      </Content>
    </DashboardContainer>
  );
};

export default Dashboard;
