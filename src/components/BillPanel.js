import { useState } from "react";

export default function BillPanel({activeFriend, onChangeBalance}) {
    const [values, setValues] = useState({
        billValue: "",
        yourPartValue: "",
        friendPartValue: "",
        payer: "you",
    })
    const [formError, setFormError] = useState("");

    const balance = values.payer === "you" ? values.friendPartValue : -values.yourPartValue;  

    const handleChangeBillValue = function(event) {
        const difference = Number(event.target.value) - Number(values.yourPartValue);
        setValues((values) => ({
            ...values,
            billValue: Number(event.target.value),
            friendPartValue: difference >= 0 ? difference : ""
        }))
    }

    const handleChangeYourPartValue = function(event) {
        const difference = Number(values.billValue) - Number(event.target.value);
        if (difference >= 0) {
            setValues((values) => ({
                ...values,
                yourPartValue: Number(event.target.value),
                friendPartValue: difference
            }))
        }
    }

    const handleChangePayer = function(event) {
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
            <h2 className="bill-panel__title">Split the bill with {activeFriend.name}</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__item">
                    <label className="form__label" htmlFor="bill-value">Bill value</label>
                    <input
                        className="form__input"
                        type="number"
                        id="bill-value"
                        name="bill-value"
                        min="0"
                        autoFocus={true}
                        value={values.billValue}
                        onChange={handleChangeBillValue}
                    />
                </div>
                <div className="form__item">
                    <label className="form__label" htmlFor="your-cont-value">Your part</label>
                    <input
                        className="form__input"
                        type="number"
                        id="your-cont-value"
                        name="your-cont-value"
                        min="0"
                        readOnly={values.billValue ? false : true}
                        value={values.yourPartValue}
                        onChange={handleChangeYourPartValue}
                    />
                </div>
                <div className="form__item">
                    <label className="form__label" htmlFor="friend-cont-value">Friend's part</label>
                    <input
                        className="form__input"
                        type="text"
                        id="friend-cont-value"
                        name="friend-cont-value"
                        disabled={true}
                        value={values.friendPartValue}
                    />
                </div>
                <div className="form__item">
                    <label className="form__label" htmlFor="payer">Who's paying</label>
                    <select
                        className="form__input"
                        id="payer"
                        name="payer"
                        value={values.payer}
                        onChange={handleChangePayer}
                    >
                        <option value={'you'}>You</option>
                        <option value={'friend'}>Friend</option>
                    </select>
                </div>
                {formError && (
                    <div className="form__error">
                        {formError}
                    </div>
                )}
                <div className="form__buttons">
                    <button className="btn">Split</button>
                </div>
            </form>
        </section>
    )
}