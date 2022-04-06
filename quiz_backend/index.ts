import { DataSource } from "typeorm";
import { Product } from "./Board.postgres";
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }
  input UpdateProductInput {
    name: String
    detail: String
    price: Int
  }
  type Return {
    _id: String
    number: Int
    message: String
    deletedAt: Int
  }
  type ProductReturn {
    _id: ID
    seller: String
    name: String
    detail: String
    price: Int
  }

  type Query {
    fetchProducts(page: Int): [ProductReturn!]
    fetchProduct(productId: ID): [ProductReturn]
  }
  type Mutation {
    createProduct(
      seller: String
      createProductInput: CreateProductInput!
    ): Return
    updateProduct(
      productId: ID
      updateProductInput: UpdateProductInput!
    ): Return
    deleteProduct(productId: ID): Return
  }
`;
const resolvers = {
  Query: {
    fetchProducts: async () => {
      // 데이터베이스에 접속해서 게시물 가져오기
      const result = await Product.find();
      return result;
    },
    fetchProduct: async (_: any, args: any) => {
      const result2 = await Product.find({ where: { _id: args.productId } });
      return result2;
    },
  },
  Mutation: {
    createProduct: async (_: any, args: any) => {
      // 데이터베이스에 접속해서 게시물 등록하기
      await Product.insert({
        seller: args.seller,
        ...args.createProductInput,
      });
      return "게시물을 등록했습니다";
    },
    updateProduct: async (_: any, args: any) => {
      // 데이터베이스에 접속해서 게시물 등록하기
      await Product.update(
        {
          _id: args.productId,
        },
        { ...args.updateProductInput }
      );
      return "게시물을 등록했습니다";
    },
    deleteProduct: async (_: any, args: any) => {
      // 데이터베이스에 접속해서 게시물 등록하기
      await Product.update({ _id: args.productId }, { deletedAt: new Date() });
      return "게시물을 등록했습니다";
    },
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
});

const AppDataSourde = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5011,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [Product],
  synchronize: true,
  logging: true,
});

AppDataSourde.initialize()
  .then(() => {
    console.log("성공");
    server.listen(4000).then(({ url }: any) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log("실패");
  });
