import { useEffect, useState } from "react";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";

import type { User } from "./types";
import UsersList from "./components/UsersList";

export default function App() {
    const [searchValue, setSearchValue] = useState<string>('');
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                data.map((json: User) => {
                    json.image = 'https://i.pravatar.cc/300?img=' + json.id;
                    return json;
                });
                setUsers(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [])

    const filtered = users.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <div className="dashboard">
            <div className="dashboard-aside">
                <Search
                    placeholder="Filter users by name"
                    onChange={ (value: string) => setSearchValue(value) }
                />

                <UsersList
                    users={ filtered }
                    selectedUser={ selectedUser }
                    onSelect={ setSelectedUser }
                />
            </div>

            <div className="dashboard-main">
                { selectedUser
                    ? <UserInfo
                        user={ selectedUser }
                        onClose={ () => setSelectedUser(null) }
                    />
                    : <div className="grid place-items-center h-full text-black/50">
                        <p>Select a user to see more info</p>
                    </div>
                }
            </div>
        </div>
    )
}

