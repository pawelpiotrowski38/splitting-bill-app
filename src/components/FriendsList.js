import AddFriend from "./AddFriend";
import Friend from "./Friend";

const friends = [
    {
        id: 1,
        name: 'John',
    },
    {
        id: 2,
        name: 'Chris',
    },
    {
        id: 3,
        name: 'Jane',
    }
];

export default function FriendsList() {
    return (
        <section className="friends-list">
            {friends.map(friend => (
                <div key={friend.id}>
                    <Friend />
                </div>
            ))}
            <div className="friends-list__button">
                <button className="btn">Add friend</button>
            </div>
            <AddFriend />
        </section>
    )
}