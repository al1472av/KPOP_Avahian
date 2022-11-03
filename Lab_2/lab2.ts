module lab2{
    enum WorkerCategory {
        BUSINNES_ANALYST,
        DEVELOPER,
        DESIGNER,
        QA,
        SCRUM_MASTER
    }

    interface IPrizeLogger{
        (someStr : string) : void;
    }

    interface IWorker {
        id : number;
        name : string;
        surname : string;
        available : boolean;
        salary : number;
        category : WorkerCategory;
        markPrize : IPrizeLogger;
    }

    interface IPerson{
        name : string;
        email : string;
    }

    interface IAuthor extends IPerson{
        numBooksPubleshed : number;
    }

    interface ILibrarian extends IPerson{
        department : string;
        assistCustomer(custName : string) : void;
    }
    
    class UniversityLibrarian implements ILibrarian{
        name: string;
        email: string;
        department: string;
        
        constructor(name : string, email : string, department : string){
            this.name = name;
            this.email = email;
            this.department = department;
        }

        assistCustomer(custName: string) : void {
            console.log(`${this.name} is assisting ${custName}`);
        }
        
    }

    abstract class ReferenceItem {
        // title : string;
        // year : number;

        private _publisher : string | undefined;

        static department : string = "Static_department";

        get publisher() : string {
            if(this._publisher != null){
                return this._publisher.toUpperCase();
            }
            return "";
        }

        set publisher(newPublisher : string) {
            this._publisher = newPublisher;
        }

        constructor(public title : string, protected year : number){
            console.log('Creating a new ReferenceItem ...' );
        }

        printItem() : void {
            console.log('title was published in year');
            console.log(ReferenceItem.department);
        }

        abstract printCitation() : void;
    }

    class Encyclopedia extends ReferenceItem {
        
        constructor(title : string, year : number, public edition : number){
            super(title, year);
        }

        override printItem() : void {
            super.printItem();
            console.log(`Edition: ${this.edition} (${this.year})`);
        }

        printCitation(): void {
            console.log(`${this.title} - ${this.year}`);
        }
    }

    let logPrize : IPrizeLogger = (someStr : string) => {
        console.log(someStr);
    }

    function getAllworkers() : IWorker[] {
        let workers : IWorker[] = [
            { id : 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category : WorkerCategory.SCRUM_MASTER, markPrize : logPrize},
            { id : 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category : WorkerCategory.DEVELOPER, markPrize : logPrize},
            { id : 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category : WorkerCategory.DESIGNER, markPrize : logPrize},
            { id : 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category : WorkerCategory.DEVELOPER, markPrize : logPrize}
        ]
        return workers;
    }

    function getWorkerByID(id : number) : IWorker | undefined {
        return getAllworkers().find(worker => worker.id == id);
    }

    function printWorker(worker : IWorker) : void {
        console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`);
    }

    getAllworkers()[0].markPrize("HELLO WORLD");

    let favoriteAuthor : IAuthor = {
        name  : "albert",
        email : "albert@mail.com",
        numBooksPubleshed : 7
    };

    // let favoriteLibrarian : ILibrarian = {
    //     name  : "Doe",
    //     email : "librarian@mail.com",
    //     department : "librarians_deparment",
    //     assistCustomer : (custName : string) => {
    //         console.log(`${custName} assisted!`);
    //     }
    // };

    let favoriteLibrarian : ILibrarian = new UniversityLibrarian("Lib", "lib@mail.com", "lib");
    favoriteLibrarian.assistCustomer("lib");

    // let ref : ReferenceItem = new ReferenceItem("SomeTitle", 2012);
    // ref.printItem();

    // ref.publisher = "publisher_name";
    // console.log(ref.publisher);

    // ref.printItem();

    let refBook : Encyclopedia = new Encyclopedia("Encyclopedia", 2000, 5);
    refBook.printItem();
    refBook.printCitation();
    
}
