import FriendsList from "./FriendsList";
import '../styles.css';
import BillPanel from "./BillPanel";
import { useState } from "react";

function App() {
    const [activeFriend, setActiveFriend] = useState(null);
    const [friends, setFriends] = useState([
        {
            id: 1,
            name: 'John',
            owe: -5,
            url: 'https://i.pravatar.cc/5'
        },
        {
            id: 2,
            name: 'Chris',
            owe: 0,
            url: 'https://i.pravatar.cc/132'
        },
        {
            id: 3,
            name: 'Jane',
            owe: 20,
            url: 'https://i.pravatar.cc/78'
        }
    ]);

    const handleChangeActiveFriend = function(id) {
        setActiveFriend(id === activeFriend ? null : id);
    }

    const handleChangeOwe = function(owe, id) {
        setFriends((prevFriends) =>
            prevFriends.map((friend) =>
                friend.id === id ? { ...friend, owe: friend.owe + owe } : friend
            )
        );
        setActiveFriend(null);
    }

    return (
        <main className="main">
            <FriendsList friends={friends} activeFriend={activeFriend} onChangeActiveFriend={handleChangeActiveFriend}/>
            {activeFriend ? (
                <BillPanel activeFriend={friends[activeFriend-1]} onChangeOwe={handleChangeOwe} />
            ) : (
                <section className="bill-panel--hidden"></section>
            )}
        </main>
    );
}

export default App;
