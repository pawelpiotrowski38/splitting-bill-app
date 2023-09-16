export default function BillPanel() {

    const handleSubmit = function(event) {
        event.preventDefault();
    }

    return (
        <div className="bill-panel">
            <h2 className="bill-panel-title">Split the bill with name</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-item">
                    <label className="form-label" htmlFor="bill-value">Bill value</label>
                    <input className="form-input" type="text" id="bill-value" name="bill-value"/>
                </div>
                <div className="form-item">
                    <label className="form-label" htmlFor="your-cont-value">Your contribution</label>
                    <input className="form-input" type="text" id="your-cont-value" name="your-cont-value"/>
                </div>
                <div className="form-item">
                    <label className="form-label" htmlFor="friend-cont-value">Friend's contribution</label>
                    <input className="form-input" type="text" id="friend-cont-value" name="friend-cont-value"/>
                </div>
                <div className="form-item">
                    <label className="form-label" htmlFor="payer">Who's paying</label>
                    <select className="form-input" id="payer" name="payer">
                        <option>You</option>
                        <option>Friend</option>
                    </select>
                </div>
            </form>
            <div className="form-button">
                <button className="btn">Split</button>
            </div>
        </div>
    )
}