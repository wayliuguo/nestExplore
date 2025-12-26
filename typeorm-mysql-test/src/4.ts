import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    await AppDataSource.manager.save(User, [
      { id: 2, firstName: "ccc111", lastName: "ccc", age: 21 },
      { id: 3, firstName: "ddd222", lastName: "ddd", age: 22 },
      { id: 4, firstName: "eee333", lastName: "eee", age: 23 },
    ]);
  })
  .catch((error) => console.log(error));
