import Link from "next/link";

export default function Users({ user }) {
	return (
		<ul className=" w-96 grid gap-3">
			{user.map((u) => (
				<Link href={`users/${u.id}`} key={u.id}>
					<li className="p-3 flex justify-between bg-slate-500 rounded text-stone-900">
						<img
							src={u.avatar}
							alt=""
							className="rounded-full w-20"
						/>
						<div className="w-2/3 flex flex-col items-start justify-around">
							<h5 className="font-bold">
								{u.id} {u.first_name} {u.last_name}
							</h5>
							<p className="text-stone-800">email: {u.email}</p>
						</div>
					</li>
				</Link>
			))}
		</ul>
	);
}
