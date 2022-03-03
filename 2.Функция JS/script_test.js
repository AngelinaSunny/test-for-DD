function getDayInfo(date) {
  
  let reverseDate = date.split('.').reverse().join("/");
  let newDate = new Date(reverseDate);
  let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  let monthes = ["Января","Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
  console.log( reverseDate);
  return `${days[newDate.getDay()]}, ${Math.ceil(newDate.getDate() / 7)} неделя ${monthes[newDate.getMonth()]} ${newDate.getFullYear()} года`;
}

getDayInfo("05.08.1985");