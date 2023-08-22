import React from "react";
import Select from "react-select";

const defaultOption = {
  value: "",
  label: "現金",
  isDisabled: true,
};
const currentAssetsOptions = [
  { value: "1101", label: "現金", color: "#00B8D9" },
  { value: "1102", label: "股票", color: "#0052CC" },
  { value: "1103", label: "應收帳款", color: "#5243AA" },
  { value: "1104", label: "其他", color: "#FF5630" },
];

const nonCurrentAssetsOptions = [
  { value: "1201", label: "車子", color: "#FF8B00" },
  { value: "1202", label: "房子", color: "#FFC400" },
  { value: "1203", label: "3C", color: "#36B37E" },
  { value: "1204", label: "家電", color: "#00875A" },
  { value: "1205", label: "預付款", color: "#253858" },
  { value: "1206", label: "其他", color: "#666666" },
];

const currentLiabilitiesOptions = [
  { value: "2101", label: "信用卡費", color: "#FF8B00" },
  { value: "2102", label: "應付帳款", color: "#FFC400" },
  { value: "2103", label: "其他", color: "#36B37E" },
];

const nonCurrentLiabilitiesOptions = [
  { value: "2201", label: "分期付款", color: "#FF8B00" },
  { value: "2202", label: "車貸", color: "#FFC400" },
  { value: "2203", label: "房貸", color: "#36B37E" },
  { value: "2204", label: "其他", color: "#00875A" },
];
const recurringIncomeOptions = [
  { value: "4101", label: "薪資收入", color: "#FF8B00" },
  { value: "4102", label: "利息收入", color: "#FFC400" },
  { value: "4103", label: "其他", color: "#00875A" },
];

const nonRecurringIncomeOptions = [
  { value: "4201", label: "兼職收入", color: "#FF8B00" },
  { value: "4202", label: "中獎", color: "#FFC400" },
  { value: "4203", label: "其他", color: "#00875A" },
];
const fixedChargesOptions = [
  { value: "5101", label: "伙食支出", color: "#FF8B00" },
  { value: "5102", label: "治裝支出", color: "#FFC400" },
  { value: "5103", label: "住房支出", color: "#00875A" },
  { value: "5104", label: "交通支出", color: "#00875A" },
  { value: "5105", label: "教育支出", color: "#00875A" },
  { value: "5106", label: "娛樂支出", color: "#00875A" },
  { value: "5107", label: "孝親費", color: "#00875A" },
  { value: "5108", label: "折舊費用", color: "#00875A" },
  { value: "5109", label: "其他", color: "#00875A" },
];
const variableChargesOptions = [
  { value: "5201", label: "伙食支出", color: "#FF8B00" },
  { value: "5202", label: "治裝支出", color: "#FFC400" },
  { value: "5203", label: "住房支出", color: "#00875A" },
  { value: "5204", label: "交通支出", color: "#00875A" },
  { value: "5205", label: "教育支出", color: "#00875A" },
  { value: "5206", label: "娛樂支出", color: "#00875A" },
  { value: "5207", label: "孝親費", color: "#00875A" },
  { value: "5208", label: "其他", color: "#00875A" },
];

const groupedOptions = [
  {
    label: "流動資產",
    options: currentAssetsOptions,
  },
  {
    label: "非流動資產",
    options: nonCurrentAssetsOptions,
  },
  {
    label: "流動負債",
    options: currentLiabilitiesOptions,
  },
  {
    label: "非流動負債",
    options: nonCurrentLiabilitiesOptions,
  },
  {
    label: "經常性收入",
    options: recurringIncomeOptions,
  },
  {
    label: "非經常性收入",
    options: nonRecurringIncomeOptions,
  },
  {
    label: "固定支出",
    options: fixedChargesOptions,
  },
  {
    label: "非固定支出",
    options: variableChargesOptions,
  },
];

const customStyles = {
  menu: (provided) => ({
    ...provided,
    width: "180px", // Set this to whatever width you prefer
    fontFamily: "Arial, sans-serif",
    fontSize: "1rem",
  }),

  option: (provided, state) => ({
    ...provided,

    color: state.isSelected ? "#000" : "#333",
    // padding: "10px",
    width: "100%",
    fontFamily: "Arial, sans-serif",
    fontSize: "1rem",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    cursor: "pointer",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: "none",
    // borderColor: "none",
    padding: "5px",
    border: "none",
    boxShadow: "none",
    fontSize: "1rem",
    fontFamily: "Arial, sans-serif",
    // "&:hover": {
    //   borderColor: "#fff",
    // },
  }),
};

export default function SelectAccount({ setSubjectId, subjectId }) {
  return (
    <Select
      //   aria-labelledby="aria-label"
      options={groupedOptions}
      isOptionDisabled={(option) => option.isDisabled}
      //   placeholder="Select an option..."
      styles={customStyles}
      defaultValue={defaultOption}
      onChange={(option) => setSubjectId(option.value)}
    />
  );
}
