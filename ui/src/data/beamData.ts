import { routesById } from "data/routeData";
import { PARAMS } from "./paramsData";

interface MapDetail {
	from: string;
	to: string;
}

interface QueryParamDetail {
	map: MapDetail;
}

interface BeamDetail {
	name: string;
	url: string;
	queryParams: QueryParamDetail[];
}

interface Beam {
	[key: string]: BeamDetail[];
}

const BEAM: Beam = {
	[routesById.colorpicker.id]: [
		{
			name: routesById.shadesandtints.title,
			url: routesById.shadesandtints.path,
			queryParams: [{ map: { from: PARAMS.color, to: PARAMS.color } }],
		},
	],
	[routesById.shadesandtints.id]: [
		{
			name: routesById.colorpicker.title,
			url: routesById.colorpicker.path,
			queryParams: [{ map: { from: PARAMS.color, to: PARAMS.color } }],
		},
	],
};

export type { BeamDetail, Beam, QueryParamDetail };
export { BEAM };
