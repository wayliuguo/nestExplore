import { AppDataSource } from "./data-source";
import { IdCard } from "./entity/IdCard";

AppDataSource.initialize()
  .then(async () => {
    // 查找所有IdCard
    // const ics = await AppDataSource.manager.find(IdCard);
    // 查找所有IdCard，关联User
    // const ics = await AppDataSource.manager.find(IdCard, {
    //   relations: {
    //     user: true,
    //   },
    // });
    const ics = await AppDataSource.manager
      .getRepository(IdCard)
      .createQueryBuilder("ic")
      .leftJoinAndSelect("ic.user", "u")
      .getMany();

    console.log(ics);
  })
  .catch((error) => console.log(error));
