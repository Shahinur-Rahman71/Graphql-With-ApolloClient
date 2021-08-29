import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";
import "./FormDesign.css"

function GetUsers() {
	const { error, loading, data } = useQuery(LOAD_USERS);
	const [users, setUsers] = useState([]);
	useEffect(() => {
		if (data) {
			setUsers(data.getAllUsers);
		}
	}, [data]);
console.log(users)
	return (
		<div>
			<br/>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Password</th>
					</tr>
				</thead>
				<tbody>
					{users.map((res) => (
						<tr key={res.id}>
							<td>{res.firstName}</td>
							<td>{res.email}</td>
							<td>{res.password}</td>
						</tr>
					))}
				</tbody>
				
			</table>
		</div>
	);
}

export default GetUsers;
