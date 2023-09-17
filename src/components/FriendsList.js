import { useState } from "react";
import AddFriend from "./AddFriend";
import Friend from "./Friend";

export default function FriendsList({friends, activeFriend, onChangeActiveFriend, onFriendAdd, onFriendRemove}) {
    const [isAddOpen, setIsAddOpen] = useState(false);

    const handleAddOpen = function() {
        setIsAddOpen((isAddOpen) => !isAddOpen);
    }

    return (
        <section className="friends-list">
            <ul className="friends-list__list">
                {friends.length ? (
                    friends.map(friend => (
                        <Friend
                            key={friend.id}
                            friend={friend}
                            activeFriend={activeFriend}
                            onChangeActiveFriend={onChangeActiveFriend}
                            onFriendRemove={onFriendRemove}
                        />
                    ))
                ) : (
                    <p className="friends-list__empty">You don't have any friends on the list</p>
                )}
            </ul>
            <div className="friends-list__button">
                <button className="btn" onClick={handleAddOpen}>
                    {isAddOpen ? 'Cancel' : 'Add friend'}
                </button>
            </div>
            {isAddOpen && (
                <AddFriend onFriendAdd={onFriendAdd} onIsAddOpen={setIsAddOpen}/>
            )}
        </section>
    )
}