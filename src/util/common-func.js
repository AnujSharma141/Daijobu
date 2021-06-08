const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const scrollRight = (name, arr) => {
  let element = document.querySelector(name)
  element.scrollBy({
    top: 0,
    left: +790,
    behavior: "smooth",
  })
  document.querySelector(arr).style.cssText = "opacity: 1;"
}


const scrollLeft = (name, arr) => {
  let element = document.querySelector(name);

  element.scrollBy({
    top: 0,
    left: -790,
    behavior: "smooth",
  })
  setTimeout(() => {
    if (element.scrollLeft == 0)
      document.querySelector(arr).style.cssText = "opacity: 0;";
    console.log("test");
  }, 600)
};

const util = {
  months: months,
  scrollRight: scrollRight,
  scrollLeft: scrollLeft
}

export default util
