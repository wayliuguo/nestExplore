import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    // 更新id为1的用户的firstName为"zhang"
    await AppDataSource.manager.update(User,1, { firstName: "zhang"});
    // 更新所有firstName为"zhang"的用户的lastName为"QIAN"
    await AppDataSource.manager.update(User,{firstName: "zhang"}, { lastName: "QIAN"});
  })
  .catch((error) => console.log(error));
