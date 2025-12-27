import { AppDataSource } from "./data-source";
import { Article } from "./entity/Article";

AppDataSource.initialize()
  .then(async () => {
    const entityManager = AppDataSource.manager;

    // 通过relation 指定关联查询
    // const article = await entityManager.find(Article, {
    //   relations: {
    //     tags: true,
    //   },
    // });

    // 通过queryBuilder来join查询
    // const article = await entityManager
    //   .createQueryBuilder(Article, "a")
    //   .leftJoinAndSelect("a.tags", "t")
    //   .getMany();
    const article = await entityManager
      .getRepository(Article)
      .createQueryBuilder("a")
      .leftJoinAndSelect("a.tags", "t")
      .getMany();

    console.log(article);
    console.log(article.map((item) => item.tags));
  })
  .catch((error) => console.log(error));
