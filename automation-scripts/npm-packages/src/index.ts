import fs from "fs";
import semver from "semver";

interface PackageType {
	key: string;
	url: string;
	version: string;
	new: boolean;
}

interface ResponseType {
	packages: PackageType[];
	lastDate: number;
}

async function fetchData(url: string) {
	try {
		const response = await fetch(url);
		const data = await response.json();

		return data;
	} catch (error) {
		console.log("something went wrong");
	}
}

function compareMajorVersion(latestVersion: string, previousVesrion: string) {
	const latestMajor = semver.major(latestVersion);
	const prevMajor = semver.major(previousVesrion);

	return latestMajor > prevMajor;
}

async function fetchPackages(packageNames: string[]) {
	try {
		const packageList: PackageType[] = [];
		let prevData = (await fetchData(
			"https://raw.githubusercontent.com/lifeparticle/binarytree/main/api/packages.json"
		)) as ResponseType;

		for (const packageName of packageNames) {
			const packageUrl = `https://registry.npmjs.org/${packageName}/latest`;
			const latestPackage = await fetchData(packageUrl);

			if (latestPackage) {
				const prevPackage = prevData?.packages.find(
					(info) => info.key === packageName
				);

				const isNew =
					!prevPackage ||
					compareMajorVersion(latestPackage.version, prevPackage.version);

				const result = {
					key: packageName,
					url: `https://www.npmjs.com/package/${packageName}`,
					version: latestPackage.version,
					new: isNew,
				};

				packageList.push(result);
			}
		}

		return {
			packages: packageList,
			lastDate: Date.now(),
		};
	} catch (error) {
		console.log(error);
	}
}

async function saveDataToFile(data: any, filename: string): Promise<void> {
	return new Promise((resolve, reject) => {
		fs.writeFile(filename, JSON.stringify(data), (err) => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
}

async function main() {
	const packages = ["react", "svelte", "remix", "gatsby", "next", "vue"];
	if (!packages) {
		throw new Error("No package found");
	}
	const articles = await fetchPackages(packages);
	await saveDataToFile(articles, "packages.json");
	console.log("Data saved to packages.json");
}

main().catch((err) => {
	console.error(err);
});
