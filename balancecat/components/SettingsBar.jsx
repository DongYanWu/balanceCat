// 流動資產
import WavesIcon from "@mui/icons-material/Waves";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// 非流動資產
import VolcanoIcon from "@mui/icons-material/Volcano";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import EdgesensorLowIcon from "@mui/icons-material/EdgesensorLow";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";

// 經常性
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import WorkIcon from "@mui/icons-material/Work";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// 非經常性
import AlarmOffIcon from "@mui/icons-material/AlarmOff";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import KebabDiningIcon from "@mui/icons-material/KebabDining";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import BedIcon from "@mui/icons-material/Bed";
import Face2Icon from "@mui/icons-material/Face2";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Label from "@mui/icons-material/Label";
import FlagIcon from "@mui/icons-material/Flag";
import PersonIcon from "@mui/icons-material/Person";
import FaceIcon from "@mui/icons-material/Face";
import GmailTreeView from "@/components/GmailTreeView";
// import UploadButton from "@/components/UploadButton";
import useGetGoals from "@/hooks/useGetGoals";
import { useState } from "react";
import { CarRental } from "@mui/icons-material";

const personal = [
  {
    nodeId: "0",
    labelText: "個人資料設定",
    labelIcon: PersonIcon,
    children: [
      {
        nodeId: "1",
        labelText: "設定大頭貼",
        labelIcon: FaceIcon,
      },
    ],
  },
];

export default function SettingsBars({ token }) {
  const [goalData, setGoalData] = useState(null);
  useGetGoals({ setData: setGoalData, token });
  console.log(goalData);

  const assetsData = [
    {
      nodeId: "1100",
      labelText: "流動資產",
      labelIcon: WavesIcon,
      labelInfo: "尚無目標",
      children: [
        {
          nodeId: "1101",
          labelText: "現金",
          labelIcon: CurrencyYenIcon,
          labelInfo: "尚無目標",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "1102",
          labelText: "股票",
          labelIcon: ShowChartIcon,
          labelInfo: "尚無目標",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "1103",
          labelText: "其他",
          labelIcon: MoreHorizIcon,
          labelInfo: "尚無目標",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
      ],
    },
    {
      nodeId: "1200",
      labelText: "非流動資產",
      labelIcon: VolcanoIcon,
      labelInfo: "尚無目標",
      children: [
        {
          nodeId: "1201",
          labelText: "車子",
          labelIcon: DirectionsCarIcon,
          labelInfo: "尚無目標",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "1202",
          labelText: "房子",
          labelIcon: MapsHomeWorkIcon,
          labelInfo: "尚無目標",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "1203",
          labelText: "3C",
          labelIcon: EdgesensorLowIcon,
          labelInfo: "尚無目標",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "1204",
          labelText: "家電",
          labelIcon: LocalLaundryServiceIcon,
          labelInfo: "尚無目標",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "1205",
          labelText: "預付款",
          labelIcon: PriceCheckIcon,
          labelInfo: "尚無目標",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "1206",
          labelText: "其他",
          labelIcon: MoreHorizIcon,
          labelInfo: "尚無目標",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
      ],
    },
  ];
  const assets = [
    {
      nodeId: "1000",
      labelText: "資產",
      labelIcon: Label,
      labelInfo: "尚無目標",
      children: assetsData,
    },
  ];
  const incomeData = [
    {
      nodeId: "4100",
      labelText: "經常性收入",
      labelIcon: AccessAlarmIcon,
      labelInfo: "尚無目標",
      children: [
        {
          nodeId: "4101",
          labelText: "薪資收入",
          labelIcon: WorkIcon,
          labelInfo: "尚無目標",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "4102",
          labelText: "利息收入",
          labelIcon: AccountBalanceIcon,
          labelInfo: "尚無目標",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "4103",
          labelText: "其他",
          labelIcon: MoreHorizIcon,
          labelInfo: "尚無目標",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
      ],
    },
    {
      nodeId: "4200",
      labelText: "非經常性收入",
      labelIcon: AlarmOffIcon,
      labelInfo: "尚無目標",
      children: [
        {
          nodeId: "4201",
          labelText: "兼職收入",
          labelIcon: TwoWheelerIcon,
          labelInfo: "尚無目標",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "4202",
          labelText: "中獎收入",
          labelIcon: EmojiEventsIcon,
          labelInfo: "尚無目標",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "4203",
          labelText: "其他",
          labelIcon: MoreHorizIcon,
          labelInfo: "尚無目標",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
      ],
    },
  ];
  const income = [
    {
      nodeId: "4000",
      labelText: "收入",
      labelIcon: Label,
      labelInfo: "尚無目標",
      children: incomeData,
    },
  ];
  const expenseData = [
    {
      nodeId: "5100",
      labelText: "經常性支出",
      labelIcon: AccessAlarmIcon,
      labelInfo: "尚無限制",
      children: [
        {
          nodeId: "5101",
          labelText: "伙食支出",
          labelIcon: KebabDiningIcon,
          labelInfo: "尚無限制",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "5102",
          labelText: "治裝支出",
          labelIcon: CheckroomIcon,
          labelInfo: "尚無限制",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "5103",
          labelText: "住房支出",
          labelIcon: BedIcon,
          labelInfo: "尚無限制",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "5104",
          labelText: "交通支出",
          labelIcon: BedIcon,
          labelInfo: "尚無限制",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "5105",
          labelText: "教育支出",
          labelIcon: BedIcon,
          labelInfo: "尚無限制",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "5106",
          labelText: "娛樂支出",
          labelIcon: BedIcon,
          labelInfo: "尚無限制",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "5107",
          labelText: "孝親費",
          labelIcon: Face2Icon,
          labelInfo: "尚無限制",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "5108",
          labelText: "折舊費用",
          labelIcon: Face2Icon,
          labelInfo: "尚無限制",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "5109",
          labelText: "其他",
          labelIcon: MoreHorizIcon,
          labelInfo: "尚無限制",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
      ],
    },
    {
      nodeId: "5200",
      labelText: "非固定支出",
      labelIcon: AlarmOffIcon,
      labelInfo: "尚無限制",
      children: [
        {
          nodeId: "5201",
          labelText: "伙食支出",
          labelIcon: KebabDiningIcon,
          labelInfo: "尚無限制",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "5202",
          labelText: "治裝支出",
          labelIcon: CheckroomIcon,
          labelInfo: "尚無限制",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "5203",
          labelText: "住房支出",
          labelIcon: BedIcon,
          labelInfo: "尚無限制",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "5204",
          labelText: "交通支出",
          labelIcon: CarRental,
          labelInfo: "尚無限制",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "5205",
          labelText: "教育支出",
          labelIcon: BedIcon,
          labelInfo: "尚無限制",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "5206",
          labelText: "娛樂支出",
          labelIcon: BedIcon,
          labelInfo: "尚無限制",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "5207",
          labelText: "孝親費",
          labelIcon: Face2Icon,
          labelInfo: "尚無限制",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
        {
          nodeId: "5208",
          labelText: "其他",
          labelIcon: MoreHorizIcon,
          labelInfo: "尚無限制",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
          colorForDarkMode: "#B8E7FB",
          bgColorForDarkMode: "#071318",
        },
      ],
    },
  ];
  const expense = [
    {
      nodeId: "5000",
      labelText: "支出",
      labelIcon: Label,
      labelInfo: "尚無限制",
      children: expenseData,
    },
  ];
  const settings = [
    {
      nodeId: "-1",
      labelText: "設定目標",
      labelIcon: FlagIcon,
      children: [...assets, ...income, ...expense],
    },
  ];

  return (
    <>
      <GmailTreeView isPersonal data={personal} />
      <GmailTreeView isPersonal={false} data={settings} />
    </>
  );
}
