// Problem 19

// You are given the following information, but you may prefer to do some research for yourself.

//     1 Jan 1900 was a Monday.
//     Thirty days has September,
//     April, June and November.
//     All the rest have thirty-one,
//     Saving February alone,
//     Which has twenty-eight, rain or shine.
//     And on leap years, twenty-nine.
//     A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

countingSundays();

function countingSundays() {
  var totalResult = 0;
  var daysInMonth = [0, 31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  function calcSundays() {
    var day = 1;
    var totalSunday = 0;

    //Year 1900
    for (var month = 0; ++month < 13; ) {
      day += month == 2 ? daysInFeb(1900) : daysInMonth[month];
    }

    //Year 1901...2000
    for (var year = 1900; ++year < 2001; ) {
      for (month = 0; ++month < 13; ) {
        if (day % 7 == 0) totalSunday++;
        day += month == 2 ? daysInFeb(year) : daysInMonth[month];
      }
    }
    return totalSunday;
  }

  function daysInFeb(year) {
    if (year % 4 != 0) return 28;
    if (year % 100 == 0 && year % 400 != 0) return 28;
    return 29;
  }

  totalResult += calcSundays();
  console.log(
    `${totalResult} Sundays fell on the first of the month during the twentieth century`
  );
}
