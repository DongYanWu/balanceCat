export default function idNameConverter({ subject_id }) {
  let subjectName = "科目名稱";
  let subjectNameEn = "subject name";

  switch (subject_id) {
    case "1000":
      subjectName = "資產";
      subjectNameEn = "Assets";
      break;
    case "1100":
      subjectName = "流動資產";
      subjectNameEn = "Current Assets";
      break;
    case "1101":
      subjectName = "現金";
      subjectNameEn = "Cash";
      break;
    case "1102":
      subjectName = "股票";
      subjectNameEn = "Stocks";
      break;
    case "1103":
      subjectName = "其他";
      subjectNameEn = "Others";
      break;
    case "1200":
      subjectName = "非流動資產";
      subjectNameEn = "Non-current Assets";
      break;
    case "1201":
      subjectName = "車子";
      subjectNameEn = "Car";
      break;
    case "1202":
      subjectName = "房子";
      subjectNameEn = "House";
      break;
    case "1203":
      subjectName = "3C";
      subjectNameEn = "Electronics";
      break;
    case "1204":
      subjectName = "家電";
      subjectNameEn = "Appliances";
      break;
    case "1205":
      subjectName = "預付款";
      subjectNameEn = "Prepayments";
      break;
    case "1206":
      subjectName = "其他";
      subjectNameEn = "Others";
      break;
    case "2000":
      subjectName = "負債";
      subjectNameEn = "Liabilities";
      break;
    case "2100":
      subjectName = "流動負債";
      subjectNameEn = "Current Liabilities";
      break;
    case "2101":
      subjectName = "信用卡費";
      subjectNameEn = "Credit Card Debt";
      break;
    case "2102":
      subjectName = "應付帳款";
      subjectNameEn = "Accounts Payable";
      break;
    case "2103":
      subjectName = "其他";
      subjectNameEn = "Others";
      break;
    case "2200":
      subjectName = "非流動負債";
      subjectNameEn = "Non-current Liabilities";
      break;
    case "2201":
      subjectName = "分期付款";
      subjectNameEn = "Installment Payments";
      break;
    case "2202":
      subjectName = "車貸";
      subjectNameEn = "Car Loan";
      break;
    case "2203":
      subjectName = "房貸";
      subjectNameEn = "Mortgage";
      break;
    case "2204":
      subjectName = "其他";
      subjectNameEn = "Others";
      break;
    case "3000":
      subjectName = "權益";
      subjectNameEn = "Equity";
      break;
    case "3100":
      subjectName = "保留盈餘";
      subjectNameEn = "Retained Earnings";
      break;
    case "3200":
      subjectName = "當期損益";
      subjectNameEn = "Current Earnings";
      break;
    case "4000":
      subjectName = "收入";
      subjectNameEn = "Income";
      break;
    case "4100":
      subjectName = "經常性收入";
      subjectNameEn = "Regular Income";
      break;
    case "4101":
      subjectName = "薪資收入";
      subjectNameEn = "Salary Income";
      break;
    case "4102":
      subjectName = "利息收入";
      subjectNameEn = "Interest Income";
      break;
    case "4103":
      subjectName = "其他";
      subjectNameEn = "Others";
      break;
    case "4200":
      subjectName = "非經常性收入";
      subjectNameEn = "Non-regular Income";
      break;
    case "4201":
      subjectName = "兼職收入";
      subjectNameEn = "Part-time Income";
      break;
    case "4202":
      subjectName = "中獎收入";
      subjectNameEn = "Prize Income";
      break;
    case "4203":
      subjectName = "其他";
      subjectNameEn = "Others";
      break;
    case "5000":
      subjectName = "支出";
      subjectNameEn = "Expenses";
      break;
    case "5100":
      subjectName = "經常性支出";
      subjectNameEn = "Regular Expenses";
      break;
    case "5101":
      subjectName = "伙食支出";
      subjectNameEn = "Food Expenses";
      break;
    case "5102":
      subjectName = "治裝支出";
      subjectNameEn = "Clothing Expenses";
      break;
    case "5103":
      subjectName = "住房支出";
      subjectNameEn = "Housing Expenses";
      break;
    case "5104":
      subjectName = "交通支出";
      subjectNameEn = "Transportation Expenses";
      break;
    case "5105":
      subjectName = "教育支出";
      subjectNameEn = "Education Expenses";
      break;
    case "5106":
      subjectName = "娛樂支出";
      subjectNameEn = "Entertainment Expenses";
      break;
    case "5107":
      subjectName = "孝親費";
      subjectNameEn = "Filial Piety Expenses";
      break;
    case "5108":
      subjectName = "折舊費用";
      subjectNameEn = "Depreciation Expenses";
      break;
    case "5109":
      subjectName = "其他";
      subjectNameEn = "Others";
      break;
    case "5200":
      subjectName = "非經常性支出";
      subjectNameEn = "Non-regular Expenses";
      break;
    case "5201":
      subjectName = "伙食支出";
      subjectNameEn = "Food Expenses";
      break;
    case "5202":
      subjectName = "治裝支出";
      subjectNameEn = "Clothing Expenses";
      break;
    case "5203":
      subjectName = "住房支出";
      subjectNameEn = "Housing Expenses";
      break;
    case "5204":
      subjectName = "交通支出";
      subjectNameEn = "Transportation Expenses";
      break;
    case "5205":
      subjectName = "教育支出";
      subjectNameEn = "Education Expenses";
      break;
    case "5206":
      subjectName = "娛樂支出";
      subjectNameEn = "Entertainment Expenses";
      break;
    case "5207":
      subjectName = "孝親費";
      subjectNameEn = "Filial Piety Expenses";
      break;
    case "5208":
      subjectName = "其他";
      subjectNameEn = "Others";
      break;
    default:
      subjectName = "無此科目";
      subjectNameEn = "No such subject";
      break;
  }

  return [subjectName, subjectNameEn];
}
