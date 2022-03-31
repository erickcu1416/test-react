/* eslint-disable react/prop-types */

const ItemTable = ({item}) => {
	return (
		<tr>
			<th scope='row'>{item.id}</th>
			<td>{item.name}</td>
			<td>{item.last_name}</td>
			<td>{item.birthday}</td>
		</tr>
	);
};

export default ItemTable;
