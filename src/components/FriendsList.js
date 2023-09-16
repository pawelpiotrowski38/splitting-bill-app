import { useState } from "react";
import AddFriend from "./AddFriend";
import Friend from "./Friend";

export default function FriendsList({friends, activeFriend, onChangeActiveFriend}) {
    const [isAddOpen, setIsAddOpen] = useState(false);

    const handleAddOpen = function() {
        setIsAddOpen((isAddOpen) => !isAddOpen);
    }

    return (
        <section className="friends-list">
            <div className="friends-list__list">
                {friends.map(friend => (
                    <Friend key={friend.id} friend={friend} activeFriend={activeFriend} onChangeActiveFriend={onChangeActiveFriend}/>
                ))}
            </div>
            <div className="friends-list__button">
                <button className="btn" onClick={handleAddOpen}>
                    {isAddOpen ? 'Cancel' : 'Add friend'}
                </button>
            </div>
            {isAddOpen && (
                <AddFriend />
            )}
        </section>
    )
}