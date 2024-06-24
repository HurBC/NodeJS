async function getUser(id) {
	const res = await fetch(`https://reqres.in/api/users/${id}`);
	const { data } = await res.json();

	return data;
}

export default async function User({ params }) {
	const user = await getUser(params.id);

	return (
		<div className="p-5 w-72 h-72 flex flex-col justify-evenly items-center bg-slate-800 rounded-md">
			<img src={user.avatar} className="rounded" />
			<h3 className="font-bold">
				{user.id} {user.first_name} {user.last_name}
			</h3>
			<p>email: {user.email}</p>
		</div>
	);
}
