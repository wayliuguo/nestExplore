import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    await AppDataSource.manager.save(User, [
      { firstName: "ccc", lastName: "ccc", age: 21 },
      { firstName: "ddd", lastName: "ddd", age: 22 },
      { firstName: "eee", lastName: "eee", age: 23 },
    ]);
  })
  .catch((error) => console.log(error));
