import { useState, useEffect } from 'react';
import { responseGetAdapter } from '../../../adapters/responseGetAdapter';
import useAxios from '../../../hooks/useAxios';
import _ from 'lodash';

export const defaultPageSize = 10;

export const useTable = ({ endpoint, debug = false }) => {
	const { get } = useAxios();
	const [items, setItems] = useState([]);
	const [itemsResponse, setItemsResponse] = useState([]);

	const [totalFound, setTotalFound] = useState(0);
	const [searchItem, setSearchItem] = useState('');
	const [page, setPage] = useState(1);
	//   const [pageSize, setPageSize] = useState(defaultPageSize);

	useEffect(() => {
		search();
	}, [page, searchItem]);

	const onChangePage = page => {
		console.log('CHANGE PAGE', page);
		setPage(page);
	};

	const onSearchItem = v => {
		if (v === '') {
			search();
		} else {
			const copyItems = itemsResponse;
			const nt = copyItems.filter(
				x =>
					x.name.toLowerCase().includes(v) ||
					x.last_name.toLowerCase().includes(v) ||
					x.id.toString().includes(v)
			);
			setItems(nt);
		}
	};

	const search = async () => {
		if (debug) console.log(`Params for GET ${endpoint} request: `);

		try {
			const response = await get(endpoint);
			const res = responseGetAdapter(response);
			const newItems = _.get(res, `data.employees`, []);
			setItemsResponse(newItems);
			setSearchItem('');

			let pageToMap = page;
			if (pageToMap !== 1) {
				const p = page - 1;
				pageToMap = p * 10;
			} else {
				pageToMap = 0;
			}

			const ni = itemsResponse;
			const mapItems = ni.splice(pageToMap, 10);

			setItems(mapItems);
			setTotalFound(newItems.length || 0);
		} catch (error) {
			console.log({ error });
		}
	};

	return {
		page,
		totalFound,
		searchItem,
		items,
		onChangePage,
		onSearchItem,
		search, // use with precaution,
	};
};
