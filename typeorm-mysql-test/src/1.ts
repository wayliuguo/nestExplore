import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const user = new User();
    user.firstName = "Liu";
    user.lastName = "Well";
    user.age = 25;
    await AppDataSource.manager.save(user);
  })
  .catch((error) => console.log(error));
