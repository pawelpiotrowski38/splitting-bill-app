import FriendsList from "./FriendsList";
import '../styles.css';
import BillPanel from "./BillPanel";

function App() {
  return (
    <main className="main">
        <section className="friends">
            <FriendsList />
        </section>
        <section className="bill">
            <BillPanel />
        </section>
    </main>
  );
}

export default App;
