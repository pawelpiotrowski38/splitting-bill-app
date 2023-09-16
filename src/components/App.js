import FriendsList from "./FriendsList";
import '../styles.css';
import AddFriend from "./AddFriend";
import BillPanel from "./BillPanel";

function App() {
  return (
    <main className="main">
        <FriendsList />
        <AddFriend />
        <BillPanel />
    </main>
  );
}

export default App;
