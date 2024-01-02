## Installation

### Prerequisites

Ensure these dependencies are installed before proceeding:

```shell
node -v
# 18.16.1

yarn -v
# 3.6.1
```

If you don't have these installed, please visit [Node.js](https://nodejs.org/en) official website and [Yarn](https://yarnpkg.com/) Package Manager to download and install them.

### Installing Project Dependencies

Install project dependencies using Yarn with the `--immutable` flag to ensure consistent package versions:

```shell
yarn install --immutable
```

## Running the Project Locally

To run the project locally, execute the following command:

```shell
yarn dev
```

## Running Linters

Run the following command to execute the linter:

```shell
yarn lint
```

## Running Tests

You can also run tests to ensure the project's functionality:

```shell
yarn test
```