import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const user = new User();
    user.id = 1;
    user.firstName = "Li";
    user.lastName = "Will";
    user.age = 18;
    await AppDataSource.manager.save(user);
  })
  .catch((error) => console.log(error));
