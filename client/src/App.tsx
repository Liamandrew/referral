import { ReferralForm } from "./pages/ReferralForm";
import { ReferralList } from "./pages/ReferralList";
import style from "./App.module.css";

function App() {
    return (
        <div className={style.container}>
            <div className={style.formItem}>
                <ReferralForm onSuccess={console.log} onError={console.log} />
            </div>
            <div className={style.listItem}>
                <ReferralList />
            </div>
        </div>
    );
}

export default App;
