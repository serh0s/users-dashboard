import type { MouseEvent } from "react";
import type { User } from "../types";

import cn from "../helpers/class-names";
type Props = {
    users: User[],
    selectedUser?: User | null,
    onSelect: (user: User) => void
}

export default function UsersList({ users, onSelect, selectedUser }: Props ) {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>, userId: number) => {
        event.preventDefault();

        const user = users.find((user) => user.id === userId);

        if (user) {
            onSelect(user);
        }
    };

    return (
        <ul className="users custom-scrollbar">
            { users.length === 0
                ? <p className="users-item">No user found</p>
                :  users.map((user: User) => (
                    <li
                        key={user.id}
                        className={
                            cn(
                                'users-item',
                                { 'is-active': selectedUser && selectedUser.id === user.id }
                            )
                        }
                    >
                        <a
                            href="#"
                            className="flex gap-2 items-center"
                            onClick={ (e: MouseEvent<HTMLAnchorElement>) => handleClick(e, user.id) }
                        >
                            <img
                                className="size-10 rounded-full"
                                src={ user.image }
                                alt=""
                            />

                            <div>
                                <h2 className="text-md leading-tight"><b>{user.name}</b></h2>
                                <p className="text-white/60 text-xs"> {user.username}</p>
                            </div>
                        </a>
                    </li>
                ))
            }

        </ul>
    )
}


// <ul className="users custom-scrollbar">
//     { filtered.length === 0
//         ? <p className="users-item">No user found</p>
//         : <UsersList
//             users={ filtered }
//             selectedUser={ selectedUser }
//             onSelect={ setSelectedUser }
//         />
//     }
// </ul>