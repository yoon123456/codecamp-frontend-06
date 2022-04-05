import { DataSource } from "typeorm";
import { Board2 } from "./Board.postgres";

const AppDataSourde = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5011,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [Board2],
  synchronize: true,
  logging: true,
});

AppDataSourde.initialize()
  .then(() => {
    console.log("성공");
  })
  .catch(() => {
    console.log("실패");
  });
