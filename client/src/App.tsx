import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ReferralForm } from "./pages/ReferralForm";
import { ReferralList } from "./pages/ReferralList";
import { referralReducer } from "./state/referralSlice";
import style from "./App.module.css";

const store = configureStore({ reducer: referralReducer });

function App() {
    return (
        <Provider store={store}>
            <div className={style.container}>
                <div className={style.formItem}>
                    <ReferralForm />
                </div>
                <div className={style.listItem}>
                    <ReferralList />
                </div>
            </div>
        </Provider>
    );
}

export default App;
