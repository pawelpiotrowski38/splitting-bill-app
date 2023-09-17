import { TiDelete } from "react-icons/ti";

export default function Friend({friend, activeFriend, onChangeActiveFriend, onFriendRemove}) {
    return (
        <li className={`friend ${friend.id === activeFriend?.id ? 'friend--active' : ''}`}>
            <div className="friend__avatar">
                <div className="friend__avatar-image">
                    <img src={friend.url} alt="friend" />
                </div>
            </div>
            <div className="friend__info">
                <p className="friend__name">{friend.name}</p>
                {friend.balance === 0 && (
                    <p className="friend__balance">
                        {`You and ${friend.name} are even`}
                    </p>
                )}
                {friend.balance > 0 && (
                    <p className="friend__balance friend__balance--green">
                        {`${friend.name} owes you ${friend.balance}$`}
                    </p>
                )}
                {friend.balance < 0 && (
                    <p className="friend__balance friend__balance--red">
                        {`You owe ${friend.name} ${Math.abs(friend.balance)}$`}
                    </p>
                )}
            </div>
            <div className="friend__buttons">
                <button
                    className="btn"
                    onClick={() => onChangeActiveFriend(friend)}
                >
                    {friend.id === activeFriend?.id ? 'Close' : 'Select'}
                </button>
                <TiDelete className='friend__remove-icon' onClick={() => onFriendRemove(friend.id)} />
            </div>
        </li>
    )
}