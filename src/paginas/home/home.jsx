import { pessoas } from "../../dados";
import { List } from "../../components";

const Home = () => {
    return(
        <div>
            <h1>Página inicial</h1>
            <List items={pessoas}/>
        </div>
    );
};

export default Home;