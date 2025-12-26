import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const user = new User();
    user.id = 1;

    await AppDataSource.manager.remove(User, user);
  })
  .catch((error) => console.log(error));
