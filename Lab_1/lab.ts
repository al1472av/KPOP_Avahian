type Employee = {
  id: number;
  Name: string;
  surname: string;
  available: boolean;
  salary: number;
  category: Category;
};

enum Category {
  BusinessAnalyst,
  Developer,
  Designer,
  QA,
  ScrumMaster,
}

function getAllworkers() {
  let workers: Array<Employee> = [
    {
      id: 0,
      Name: "Ivan",
      surname: "Ivanov",
      available: true,
      salary: 1000,
      category: Category.Developer,
    },
    {
      id: 1,
      Name: "Petro",
      surname: "Petrov",
      available: true,
      salary: 1500,
      category: Category.QA,
    },
    {
      id: 2,
      Name: "Vasyl",
      surname: "Vasyliev",
      available: false,
      salary: 1600,
      category: Category.Designer,
    },
    {
      id: 3,
      Name: "Evgen",
      surname: "Zhukov",
      available: true,
      salary: 1300,
      category: Category.ScrumMaster,
    },
  ];
  return workers;
}

function logFirstAvilable(array: Array<Employee> = getAllworkers()): void {
  let count: number = array.length;

  console.log(`count = ${count}`);

  let availableEmployers: Array<{ Name: string; surname: string } | undefined> =
    [];
  for (const employee of array) {
    if (employee.available) {
      availableEmployers.push({
        Name: employee.Name,
        surname: employee.surname,
      });
      console.log(`Name = ${employee.Name}, Surname = ${employee.surname}\n`);
    }
  }
}

function getWorkersNamesByCategory(
  category: Category = Category.Designer
): Array<{ surname: string }> {
  let availableEmployers: Array<{ surname: string }> = [];
  for (const employee of getAllworkers()) {
    if (employee.category == category) {
      availableEmployers.push({
        surname: employee.surname,
      });
    }
  }

  return availableEmployers;
}

function logWorkersNames(surnames: Array<{ surname: string }>): void {
  surnames.forEach((suranme) => console.log(suranme.surname));
}
function getWorkerByID(workerId: number): string {
  let worker = getAllworkers().find((worker) => worker.id == workerId);

  return `${worker?.Name} ${worker?.surname} ${worker?.salary}`;
}

function createCustomerID(name: string, id: number) {
  return name + id;
}

const myID: string = createCustomerID("Ann", 10);
console.log(myID);

let idGenerator: typeof createCustomerID = (name: string, id: number) =>
  name + id;
idGenerator = createCustomerID;

function createCustomer(name: string, age?: number, city?: string) {
  console.log(`${name}`);

  if (age) {
    console.log(age);
  }

  if (city) {
    console.log(city);
  }
}
createCustomer("ggg")
function checkoutWorkers(customer: string, ...workerIDs: number[]) {
  console.log(customer);

  let availableWorkers: any[] = getAllworkers()
    .filter((worker) => worker.available == true)
    .map((worker) => getWorkerByID(worker.id));

  return availableWorkers;
}

let myWorkers = checkoutWorkers("Ann", 1, 2, 4);
myWorkers.forEach((worker) => console.log(worker));

console.log("-----------\n")
logFirstAvilable(getAllworkers());
console.log("-----------\n")
getWorkersNamesByCategory(Category.Designer);
console.log("-----------\n")
logWorkersNames(getWorkersNamesByCategory(Category.Designer));
console.log("-----------\n")
console.log(getWorkerByID(0));
