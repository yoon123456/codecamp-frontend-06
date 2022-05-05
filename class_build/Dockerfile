FROM node:14

# RUN mkdir class_build  원래는 파일을 만드느것이 정황상 맞지만 알아서 만들어 주어서 굳이 따로 만들 필요가 없다
WORKDIR /class_build/
COPY . /class_build/

RUN yarn install
RUN yarn build:ssr
CMD yarn start
# CMD는 한번만 사용이 가능하지만 RUN은 여러번 사용이 가능하다
