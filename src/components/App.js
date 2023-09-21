import FriendsList from "./FriendsList";
import '../styles.css';
import BillPanel from "./BillPanel";
import { useState } from "react";

function App() {
    const [activeFriend, setActiveFriend] = useState(null);
    const [friends, setFriends] = useState([
        {
            id: 678467,
            name: 'John',
            balance: -5,
            url: 'https://i.pravatar.cc/48?u=678467'
        },
        {
            id: 857566,
            name: 'Chris',
            balance: 0,
            url: 'https://i.pravatar.cc/48?u=857566'
        },
        {
            id: 912833,
            name: 'Jane',
            balance: 20,
            url: 'https://i.pravatar.cc/48?u=912833'
        }
    ]);

    const handleChangeActiveFriend = function(friend) {
        setActiveFriend(friend.id === activeFriend?.id ? null : friend);
    }

    const handleChangeBalance = function(balance, id) {
        setFriends((prevFriends) =>
            prevFriends.map((friend) =>
                friend.id === id ? { ...friend, balance: friend.balance + balance } : friend
            )
        );
        setActiveFriend(null);
    }

    const handleFriendAdd = function(newFriend) {
        setFriends(prevFriends => [...prevFriends, newFriend]);
    }

    const handleFriendRemove = function(id) {
        setFriends((prevFriends) =>
            prevFriends.filter((friend) => friend.id !== id)
        );
        if (activeFriend && id === activeFriend.id) {
            setActiveFriend(null);
        }
    }

    return (
        <main className="main">
            <FriendsList
                friends={friends}
                activeFriend={activeFriend}
                onChangeActiveFriend={handleChangeActiveFriend}
                onFriendAdd={handleFriendAdd}
                onFriendRemove={handleFriendRemove}
            />
            {activeFriend ? (
                <BillPanel
                    key={activeFriend.id}
                    activeFriend={activeFriend}
                    onChangeBalance={handleChangeBalance}
                />
            ) : (
                <section className="bill-panel--hidden"></section>
            )}
        </main>
    );
}

export default App;
