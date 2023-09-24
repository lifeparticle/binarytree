interface PackageListProps {
	packages: { key: string; url: string; version: string; new: boolean }[];
	isLoading: boolean;
}

const PACKAGE_QUERY_KEY = "npm-packages";
const PACKAGE_QUERY_URL =
	"https://raw.githubusercontent.com/lifeparticle/binarytree/main/api/packages.json";

export { PACKAGE_QUERY_KEY, PACKAGE_QUERY_URL };
export type { PackageListProps };
