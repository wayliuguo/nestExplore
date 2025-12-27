import { AppDataSource } from "./data-source";
import { IdCard } from "./entity/IdCard";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const user = new User();
    user.firstName = "san";
    user.lastName = "zhang";
    user.age = 20;

    const idCard = new IdCard();
    idCard.cardName = "222222222222";
    idCard.user = user; // 关联user

    await AppDataSource.manager.save(user);
    await AppDataSource.manager.save(idCard);
  })
  .catch((error) => console.log(error));
