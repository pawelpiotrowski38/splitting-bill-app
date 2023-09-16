import { useState } from "react";

export default function BillPanel({activeFriend, onChangeBalance}) {
    const [values, setValues] = useState({
        billValue: 0,
        yourPartValue: 0,
        friendPartValue: 0,
        payer: "you",
    })
    const [formError, setFormError] = useState("");

    const balance = values.payer === "you" ? values.friendPartValue : -values.yourPartValue;  

    const changeBillValue = function(event) {
        const difference = Number(event.target.value) - Number(values.yourPartValue);
        setValues((values) => ({
            ...values,
            billValue: Number(event.target.value),
            friendPartValue: difference >= 0 ? difference : 0
        }))
    }

    const changeyourPartValue = function(event) {
        const difference = Number(values.billValue) - Number(event.target.value);
        if (difference >= 0) {
            setValues((values) => ({
                ...values,
                yourPartValue: Number(event.target.value),
                friendPartValue: difference
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
        if (values.yourPartValue <= values.billValue && values.billValue > 0) {
            onChangeBalance(balance, activeFriend.id);
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
                    <label className="form-label" htmlFor="your-cont-value">Your part</label>
                    <input
                        className="form-input"
                        type="text"
                        id="your-cont-value"
                        name="your-cont-value"
                        min="0"
                        max={`${values.billValue}`}
                        readOnly={values.billValue ? false : true}
                        value={values.yourPartValue}
                        onChange={changeyourPartValue}
                    />
                </div>
                <div className="form-item">
                    <label className="form-label" htmlFor="friend-cont-value">Friend's part</label>
                    <input
                        className="form-input"
                        type="text"
                        id="friend-cont-value"
                        name="friend-cont-value"
                        disabled={true}
                        value={values.friendPartValue}
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