import '../App.css';
import { PropsDisplayer, Product } from '../components/PropsObj/PropsObj';
import Greeting from '../components/LoginProps/LoginProps';
import { Talker } from '../components/Talker/Talker';
import { List } from '../components/PropsObj/PropsChildren';
import { ShowHideGroceryList, ShowGroceryOnClick } from '../components/GroceryList/ShowGroceryList';
import AuthForm from '../components/Login/Login';

export default function Home(props) {
    return (
        <>
            <h1 className='title'>
                Hello, Diego this is your React Test Project!
            </h1>
            <p className='props'>{props.name}</p>

            <p>new update</p>

            <AuthForm />
            <hr/>

            <PropsDisplayer name="Diego" age="42" tech={['HTML5', 'SCSS']} />

            <hr/>
            <Product name="Apple Watch" price = {"$" + 399} rating = "4.5/5.0" />

            <h2>Login with Props</h2>
            <hr/>
            <div>
                <h1>
                    MovieFlix
                </h1>
                <p>A simple if else condition checking if 'signedIn' show greeting and movie </p>
                <Greeting name="Diego" signedIn={true} />
            </div>

            <hr/>
            <div>
                <Talker />
            </div>

            <hr/>

            <div>
                <p>props with open and closing component tagas</p>
                <List type="Living Musician">
                    <li>Sachiko M</li>
                    <li>Harbey Fisher</li>
                </List>

                <List type="Living Cat Musician">
                    <li>Sample The Piano Cat</li>
                </List>
            </div>
            <div style={{ marginTop: '10px' }}>
                <ShowHideGroceryList />
            </div>
            <div style={{ marginTop: '10px' }}>
                <ShowGroceryOnClick />
            </div>
        </>
    )
}