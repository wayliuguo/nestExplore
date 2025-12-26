import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const users = await AppDataSource.manager.getRepository(User).find();
    console.log(users);
  })
  .catch((error) => console.log(error));