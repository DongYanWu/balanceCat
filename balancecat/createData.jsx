function getDayOfWeek(date) {
  const days = [
    "星期天",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  const dayNum = date.getDay();
  return days[dayNum];
}

export default function createData({ id, timestamp, details }) {
  const date = timestamp.split(" ")[0];
  const parsedDate = new Date(date); // 將字串轉換成 Date 物件
  const day = getDayOfWeek(parsedDate);
  const transformedDetails = details.map((detail) => {
    let description;
    if (detail.description === null) {
      description = "這筆金額沒有註解🫥";
    } else {
      description = detail.description;
    }
    let amount;
    if (detail.amount < 0) {
      amount = -1 * detail.amount;
    } else {
      amount = detail.amount;
    }
    return {
      id,
      date,
      amount,
      description,
      day,
    };
  });
  return transformedDetails;
}
