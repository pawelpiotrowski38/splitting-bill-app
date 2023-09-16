import { useState } from "react";

export default function BillPanel({activeFriend, onChangeOwe}) {
    const [values, setValues] = useState({
        billValue: 0,
        yourContValue: 0,
        friendContValue: 0,
        payer: "you",
    })
    const [formError, setFormError] = useState("");

    const owe = values.payer === "you" ? values.friendContValue : -values.yourContValue;  

    const changeBillValue = function(event) {
        const difference = Number(event.target.value) - Number(values.yourContValue);
        setValues((values) => ({
            ...values,
            billValue: Number(event.target.value),
            friendContValue: difference >= 0 ? difference : 0
        }))
    }

    const changeYourContValue = function(event) {
        const difference = Number(values.billValue) - Number(event.target.value);
        if (difference >= 0) {
            setValues((values) => ({
                ...values,
                yourContValue: Number(event.target.value),
                friendContValue: difference
            }))
        }
    }

    const changePayer = function(event) {
        setValues((values) => (
            {...values, payer: event.target.value}
        ))
    }

    const handleSubmit = function(event) {
        event.preventDefault();
        if (values.yourContValue <= values.billValue && values.billValue > 0) {
            onChangeOwe(owe, activeFriend.id);
            setFormError("");
        } else {
            setFormError("Entered values are not correct!");
        }
    }

    return (
        <section className="bill-panel">
            <h2 className="bill-panel-title">Split the bill with {activeFriend.name}</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-item">
                    <label className="form-label" htmlFor="bill-value">Bill value</label>
                    <input
                        className="form-input"
                        type="text"
                        id="bill-value"
                        name="bill-value"
                        min="0"
                        value={values.billValue}
                        onChange={changeBillValue}
                    />
                </div>
                <div className="form-item">
                    <label className="form-label" htmlFor="your-cont-value">Your contribution</label>
                    <input
                        className="form-input"
                        type="text"
                        id="your-cont-value"
                        name="your-cont-value"
                        min="0"
                        max={`${values.billValue}`}
                        readOnly={values.billValue ? false : true}
                        value={values.yourContValue}
                        onChange={changeYourContValue}
                    />
                </div>
                <div className="form-item">
                    <label className="form-label" htmlFor="friend-cont-value">Friend's contribution</label>
                    <input
                        className="form-input"
                        type="text"
                        id="friend-cont-value"
                        name="friend-cont-value"
                        disabled={true}
                        value={values.friendContValue}
                    />
                </div>
                <div className="form-item">
                    <label className="form-label" htmlFor="payer">Who's paying</label>
                    <select
                        className="form-input"
                        id="payer"
                        name="payer"
                        value={values.payer}
                        onChange={changePayer}
                    >
                        <option value={'you'}>You</option>
                        <option value={'friend'}>Friend</option>
                    </select>
                </div>
                {formError && (
                    <div className="form-error">
                        {formError}
                    </div>
                )}
                <div className="form-button">
                    <button className="btn">Split</button>
                </div>
            </form>
        </section>
    )
}