export default function Friend({friend, activeFriend, onChangeActiveFriend}) {
    return (
        <div className={`friend ${friend.id === activeFriend?.id ? 'friend--active' : ''}`}>
            <div className="friend-avatar">
                <div className="friend-avatar-image">
                    <img src={friend.url} alt="friend avatar" />
                </div>
            </div>
            <div className="friend-name">
                <p>{friend.name}</p>
                {friend.balance === 0 && (
                    <p>
                        {`You and ${friend.name} are even`}
                    </p>
                )}
                {friend.balance > 0 && (
                    <p className="friend-balance--green">
                        {`${friend.name} owes you ${friend.balance}$`}
                    </p>
                )}
                {friend.balance < 0 && (
                    <p className="friend-balance--red">
                        {`You owe ${friend.name} ${Math.abs(friend.balance)}$`}
                    </p>
                )}
            </div>
            <div className="friend-button">
                <button
                    className="btn"
                    onClick={() => onChangeActiveFriend(friend)}
                >
                    {friend.id === activeFriend?.id ? 'Close' : 'Select'}
                </button>
            </div>
        </div>
    )
}