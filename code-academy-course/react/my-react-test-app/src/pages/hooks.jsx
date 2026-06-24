import { 
    Toggle,
    ToggleColor,
    ToggleLoading,
    SetStateOutOfJSX,
    SetPreviousCountState,
    QuizNavBar,
    PersonalPizza,
    SeparateHooksForSeparateStates
} from '../components/Hooks/HooksStates';
import GroceryCart from '../components/Hooks/GroceryCart'
import { questions } from '../components/Hooks/QuestionsData'
import { options } from '../components/Hooks/PizzaListData'
import EditProfile from '../components/Hooks/ObjectsInState'

export default function Hooks() {
    return (
        <main className="main-hooks">
            <h1>Hello Hooks</h1>

            <Toggle />

            <hr/>

            <ToggleColor />

            <hr/>
            <ToggleLoading />

            <hr/>
            <SetStateOutOfJSX />

            <hr/>
            <SetPreviousCountState />

            <hr/>
            <QuizNavBar questions={questions} />

            <hr/>
            <PersonalPizza options={options} />

            <hr/>
            <GroceryCart />

            <hr/>
            <EditProfile />

            <hr/>
            <SeparateHooksForSeparateStates />
        </main>
    )
}
