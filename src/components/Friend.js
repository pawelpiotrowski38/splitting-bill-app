export default function Friend({friend, activeFriend, onChangeActiveFriend}) {
    return (
        <div className={`friend ${friend.id === activeFriend ? 'friend--active' : ''}`}>
            <div className="friend-avatar">
                <div className="friend-avatar-image">
                    <img src={friend.url} alt="friend avatar" />
                </div>
            </div>
            <div className="friend-name">
                <p>{friend.name}</p>
                <p className={friend.owe !== 0 && (friend.owe > 0 ? 'friend-owe--green' : 'friend-owe--red')}>
                    {friend.owe === 0 && `You and ${friend.name} are even`}
                    {friend.owe < 0 && `You owe ${friend.name} ${Math.abs(friend.owe)}$`}
                    {friend.owe > 0 && `${friend.name} owes you ${friend.owe}$`}
                </p>
            </div>
            <div className="friend-button">
                <button
                    className="btn"
                    onClick={() => onChangeActiveFriend(friend.id)}
                >
                    {friend.id === activeFriend ? 'Close' : 'Select'}
                </button>
            </div>
        </div>
    )
}