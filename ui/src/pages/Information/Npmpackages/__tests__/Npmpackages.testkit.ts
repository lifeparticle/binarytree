import { faker } from "@faker-js/faker";

export const generatePackageData = () => {
  const packages = ['react', 'svelte', 'remix', 'gatsby', 'next', 'vue'].map(key => ({
    key,
    url: `https://www.npmjs.com/package/${key}`,
    version: faker.system.semver(),
    new: faker.datatype.boolean(),
  }));

  const lastDate = faker.datatype.number({ min: 1500000000000, max: 2000000000000 });

  return {
    packages,
    lastDate,
  };
};
