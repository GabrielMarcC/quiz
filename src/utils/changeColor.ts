export const changeColor = (index: number) => {
  const colors = [
    "bg-orange-100",
    "bg-green-100",
    "bg-blue-100",
    "bg-purple-100",
  ];

  if (index >= 0 && index < colors.length) {
    return colors[index];
  } else {
    return "#FFFFFF";
  }
};
