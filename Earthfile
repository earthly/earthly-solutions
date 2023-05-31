
VERSION 0.7

PROJECT earthly-sa/earthly-demo

main-pipeline:
  PIPELINE --push 
  TRIGGER push main 
  TRIGGER pr main 
  BUILD +all-test
  ARG tag=ci-demo
  BUILD +all-build --base_url=http://localhost
  BUILD +all-docker --tag=$tag --base_url=http://localhost

all-test:
  BUILD ./rust_server/+test
  BUILD ./go_server/+test
  BUILD ./python_server/+test
  BUILD ./node_server/+test
  BUILD ./quote_client/+test

all-build:
  ARG base_url=http://localhost
  BUILD ./quote_client/+build --base_url=$base_url
  BUILD ./rust_server/+build
  BUILD ./go_server/+build
  BUILD ./node_server/+build
  BUILD ./python_server/+build

all-docker:
  ARG --required tag
  ARG base_url=http://localhost
  BUILD ./quote_client/+docker --tag=$tag --base_url=$base_url
  BUILD ./rust_server/+docker --tag=$tag
  BUILD ./go_server/+docker --tag=$tag
  BUILD ./python_server/+docker --tag=$tag 
  BUILD ./node_server/+docker --tag=$tag

dev-up:
  ARG --required tag
  LOCALLY
  RUN TAG=$tag docker-compose up

dev-down:
  LOCALLY
  RUN docker-compose down
# TODO - Add WITH DOCKER integration tests here
# bump