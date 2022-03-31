/* eslint-disable react/prop-types */

import moment from 'moment';

const ItemTable = ({ item }) => {
	return (
		<tr>
			<th scope='row'>{item.id}</th>
			<td>{item.name}</td>
			<td>{item.last_name}</td>
			<td>{moment(item.birthday).format('L')}</td>
		</tr>
	);
};

export default ItemTable;
