// WORKINGS: Renamed array so that it is more descriptive of actual dataset (i.e. replaced ‘finances’ for ‘monthlyProfit’ as this is what the dataset contains). Defined it with const so it can’t be overridden.
const monthlyProfit = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

//**TASK 1: Find total number of months included in the dataset.
// WORKINGS: Used length property to find out how many elements are in the array (and since each element represents a month and profit/loss, this tells us the total number of months).
let totalMonths = monthlyProfit.length
// console.log(totalMonths);
// Expected output 86 (CORRECT)

//**TASK 2: Find net total amount of profit/losses over the entire period.
//*TASK 2.1: We need the sum of the monthly profit/loss, but this array is 2D so we first need to work out the indexing pattern.
// WORKINGS: First index should equal row (i.e. month and profit/loss) and second index should equal column (i.e. month or profit/loss).
// console.log(monthlyProfit[0][1]);
// Expected output 867884 (CORRECT)

//*TASK 2.2: Now we need to add together each value in the second column (i.e. profit/loss). 
// WORKINGS: Used 'let' to create a dynamic variable (i.e. totalProfit) that will keep count and set it to 0 (so it will start counting from the first loop).
let totalProfit = 0

// WORKINGS: Next used a forLoop to move through each row (i.e. month and profit/loss). As we enter the loop, we add the value in the second column (i.e. profit/loss) to our totalProfit variable (i.e. our counter). Used += operator here because we’re adding the value in the second column (i.e. profit/loss) to the totalProfit variable and ‘assigning’ the sum to the totalProfit variable (i.e. totalProfit = totalProfit + profit/loss). Set our rowIndex to start at 0 so that the loop starts in the first row (because JavaScript is zero indexed). Kept the column index at 1 because all of the profit/loss values are in the second column. Set the loop condition as ‘rowIndex less than the array length’ (so that the loop will continue until all rows have been looped through). Used ++ operator in final expression of the loop so that the rowIndex will increase by 1, starting another iteration of the loop (until the loop condition is no longer met).
for(let rowIndex = 0; rowIndex < monthlyProfit.length; rowIndex++) {
  (totalProfit += monthlyProfit[rowIndex][1])
}
// console.log(totalProfit);
// Expected output 38382578 (CORRECT)
// CREDIT: Worked out Task 2 thanks to the help of Web Dev Cody (2020) BEGINNER Javascript Practice: Iteration & Arrays - How to Sum up the Numbers in a 2D Array (https://www.youtube.com/watch?v=apG8Kgonogc&list=PL6x5Q-Sj_BlYtuh3C-wA5mHAKeBw_0rDK&index=10).

//**TASK 3: Find the average of the changes in profit/losses over the entire period.
//*TASK 3.1: Find all of the changes in profit/losses (i.e. the month-to-month difference).
// WORKINGS: Used a forLoop to move through each row (i.e. month and profit/loss). As we enter the loop, we subtract the value in the column of the current row (i.e. that month’s profit/loss) (i.e. monthlyProfit[rowIndex][1]) from the value in the column of the preceding row (i.e. previous month’s profit/loss) (i.e. monthlyProfit[rowIndex-1][1]). Created a dynamic variable (i.e. monthlyDifference) and ‘assigned’ the results of the subtraction to this. Set our rowIndex to start at 1 so that the loop starts in the second row (because there is no previous month’s profit/loss to subtract from the first row; as these values are the first in the dataset). Kept column index, loop condition and final expression of the loop the same as in Task 2 (for the same reasons explained).
//*TASK 3.2: ‘Store’ all of the changes in profit/losses somewhere (so we can then workout the sum and finally the average).
// WORKINGS: Used push() method to 'push’ these values out into a new array called ‘allMonthlyDifferences’.
let allMonthlyDifferences = []

for(let rowIndex = 1; rowIndex < monthlyProfit.length; rowIndex++) {
  let monthlyDifference = (monthlyProfit[rowIndex][1] - monthlyProfit[rowIndex-1][1]);
  allMonthlyDifferences.push(monthlyDifference)
}

