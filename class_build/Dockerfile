FROM node:14

# RUN mkdir class_build  원래는 파일을 만드느것이 정황상 맞지만 알아서 만들어 주어서 굳이 따로 만들 필요가 없다
WORKDIR /class_build/
COPY . /class_build/

RUN yarn install
RUN yarn build:ssr
CMD yarn start
# CMD는 한번만 사용이 가능하지만 RUN은 여러번 사용이 가능하다
# RUN은 미리해놓고 저장해놓는 명령어들 이고 CMD는 미리 저장이 안된다
