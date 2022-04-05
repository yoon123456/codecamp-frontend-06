console.log("타입스크립트를 실행");

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

const AppDataSourde = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5011,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

AppDataSourde.initialize()
  .then(() => {
    console.log("연결성공");
  })
  .catch(() => {
    console.log("연결실패");
  });
