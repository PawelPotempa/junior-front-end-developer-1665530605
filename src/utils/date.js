export const setOrdinal = function (d) {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const getDateDifference = (d) => {
  const today = Date.now();
  const createdAt = new Date(d).getTime();
  const differenceInMillis = today - createdAt;
  const differenceInHours = Math.floor(differenceInMillis / 3600000);

  let result;

  if (differenceInHours < 24) {
    result = `Today`;
  } else if (differenceInHours / 24 === 1) {
    result = `${Math.floor(differenceInHours / 24)} day ago`;
  } else {
    result = `${Math.floor(differenceInHours / 24)} days ago`;
  }

  return result;
};

export const getDateWithOrdinal = (d) => {
  const date = new Date(d);
  const month = date.toLocaleString("en-GB", { month: "short" });
  const day = date.toLocaleString("default", { day: "numeric" });
  return `${day}${setOrdinal(day)} ${month}`;
};

export const getTime = (d) => {
  const date = new Date(d);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes}`;
};
