var Category;
(function (Category) {
    Category[Category["BusinessAnalyst"] = 0] = "BusinessAnalyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (Category = {}));
function getAllworkers() {
    var workers = [
        {
            id: 0,
            Name: "Ivan",
            surname: "Ivanov",
            available: true,
            salary: 1000,
            category: Category.Developer
        },
        {
            id: 1,
            Name: "Petro",
            surname: "Petrov",
            available: true,
            salary: 1500,
            category: Category.QA
        },
        {
            id: 2,
            Name: "Vasyl",
            surname: "Vasyliev",
            available: false,
            salary: 1600,
            category: Category.Designer
        },
        {
            id: 3,
            Name: "Evgen",
            surname: "Zhukov",
            available: true,
            salary: 1300,
            category: Category.ScrumMaster
        },
    ];
    return workers;
}
function logFirstAvilable(array) {
    if (array === void 0) { array = getAllworkers(); }
    var count = array.length;
    console.log("count = ".concat(count));
    var availableEmployers = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var employee = array_1[_i];
        if (employee.available) {
            availableEmployers.push({
                Name: employee.Name,
                surname: employee.surname
            });
            console.log("Name = ".concat(employee.Name, ", Surname = ").concat(employee.surname, "\n"));
        }
    }
}
function getWorkersNamesByCategory(category) {
    if (category === void 0) { category = Category.Designer; }
    var availableEmployers = [];
    for (var _i = 0, _a = getAllworkers(); _i < _a.length; _i++) {
        var employee = _a[_i];
        if (employee.category == category) {
            availableEmployers.push({
                surname: employee.surname
            });
        }
    }
    return availableEmployers;
}
function logWorkersNames(surnames) {
    surnames.forEach(function (suranme) { return console.log(suranme.surname); });
}
function getWorkerByID(workerId) {
    var worker = getAllworkers().find(function (worker) { return worker.id == workerId; });
    return "".concat(worker === null || worker === void 0 ? void 0 : worker.Name, " ").concat(worker === null || worker === void 0 ? void 0 : worker.surname, " ").concat(worker === null || worker === void 0 ? void 0 : worker.salary);
}
function createCustomerID(name, id) {
    return name + id;
}
var myID = createCustomerID("Ann", 10);
console.log(myID);
var idGenerator = function (name, id) {
    return name + id;
};
idGenerator = createCustomerID;
function createCustomer(name, age, city) {
    console.log("".concat(name));
    if (age) {
        console.log(age);
    }
    if (city) {
        console.log(city);
    }
}
createCustomer("ggg");
function checkoutWorkers(customer) {
    var workerIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        workerIDs[_i - 1] = arguments[_i];
    }
    console.log(customer);
    var availableWorkers = getAllworkers()
        .filter(function (worker) { return worker.available == true; })
        .map(function (worker) { return getWorkerByID(worker.id); });
    return availableWorkers;
}
var myWorkers = checkoutWorkers("Ann", 1, 2, 4);
myWorkers.forEach(function (worker) { return console.log(worker); });
console.log("-----------\n");
logFirstAvilable(getAllworkers());
console.log("-----------\n");
getWorkersNamesByCategory(Category.Designer);
console.log("-----------\n");
logWorkersNames(getWorkersNamesByCategory(Category.Designer));
console.log("-----------\n");
console.log(getWorkerByID(0));
