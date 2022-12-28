var score = 33;
score = 44;
score = "55";
var Billy = { name: "Billy", id: 333 };
Billy = { username: "hc", id: 334 };
getDbId(3);
getDbId("3");
function getDbId(id) {
    // making some API calls
    // console.log(`DB id is: ${id}`);
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// array
var data = [1, 2, 3];
var data2 = ["1", "2", '3'];
var data3 = ["1", "2", 3];
var seatAllotment;
seatAllotment = "aisle";
