export interface Package {
	key: string;
	url: string;
	version: string;
	new: boolean;
}

export interface PackageListProps {
	packages: Package[];
	isLoading: boolean;
}

export interface PackageProps {
	resource: Package;
}
