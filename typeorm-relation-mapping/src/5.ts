import { Department } from "./entity/Department";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(async () => {
    // 查找 department 表中的所有记录
    // const deps = await AppDataSource.manager.find(Department);

    // 查找 department 表中的所有记录，同时关联查询 employees 表
    // 方法1：使用 find 方法，指定 relations 参数
    // const deps = await AppDataSource.manager.find(Department, {
    //   relations: {
    //     employees: true,
    //   },
    // });
    // 方法2：使用 createQueryBuilder 方法，指定 leftJoinAndSelect 方法
    // const deps = await AppDataSource.manager
    //   .getRepository(Department)
    //   .createQueryBuilder("d")
    //   .leftJoinAndSelect("d.employees", "e")
    //   .getMany();
    const deps = await AppDataSource.manager
      .createQueryBuilder(Department, "d")
      .leftJoinAndSelect("d.employees", "e")
      .getMany();
    console.log(deps);
    console.log(deps.map((item) => item.employees));
  })
  .catch((error) => console.log(error));
