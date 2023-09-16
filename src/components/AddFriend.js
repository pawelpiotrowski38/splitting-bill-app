export default function AddFriend() {

    const handleSubmit = function(event) {
        event.preventDefault();
    }

    return (
        <div className="add-friend">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-item">
                    <label className="form-label--friend" htmlFor="name">Name</label>
                    <input className="form-input" type="text" id="name" name="name"/>
                </div>
                <div className="form-item">
                    <label className="form-label--friend" htmlFor="avatar-url">Avatar URL</label>
                    <input className="form-input" type="text" id="avatar-url" name="avatar-url"/>
                </div>
            </form>
            <div className="form-button">
                <button className="btn">Add</button>
            </div>
        </div>
    )
}