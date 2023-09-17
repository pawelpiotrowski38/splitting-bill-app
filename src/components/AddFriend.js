import { useState } from "react";

export default function AddFriend({onFriendAdd, onIsAddOpen}) {
    const [values, setValues] = useState({
        name: "",
        url: "https://i.pravatar.cc/48",
    })
    const [formError, setFormError] = useState("");

    const handleChangeName = function(event) {
        setValues((values) => ({...values, name: event.target.value}))
    }

    const handleChangeUrl = function(event) {
        setValues((values) => ({...values, url: event.target.value}))
    }

    const handleSubmit = function(event) {
        event.preventDefault();
        if (values.name && values.url) {
            const id = Math.floor(Math.random() * (900000)) + 100000;
            const newFriend = {
                id: id,
                name: values.name,
                balance: 0,
                url: `${values.url}?u=${id}`,
            }
            onFriendAdd(newFriend);
            onIsAddOpen((prev) => !prev);
        } else {
            setFormError("Entered values are not correct!")
        }
    }

    return (
        <div className="add-friend">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-item">
                    <label className="form-label--friend" htmlFor="name">Name</label>
                    <input
                        className="form-input"
                        type="text"
                        id="name"
                        name="name"
                        autoFocus={true}
                        value={values.name}
                        onChange={handleChangeName}
                    />
                </div>
                <div className="form-item">
                    <label className="form-label--friend" htmlFor="avatar-url">Avatar URL</label>
                    <input
                        className="form-input"
                        type="text"
                        id="avatar-url"
                        name="avatar-url"
                        value={values.url}
                        onChange={handleChangeUrl}
                    />
                </div>
                {formError && (
                    <div className="form-error">
                        {formError}
                    </div>
                )}
                <div className="form-button">
                    <button className="btn">Add</button>
                </div>
            </form>
        </div>
    )
}