import {
    PageTitle,
    Counter,
    CounterCleanUp,
    AutoTimerCleanEvent
} from '../components/UseEffect/PageTitle';

export default function useEffect() {
    return (
        <div className='use-effect-page'>
            <h1>The useEffect() and it's bennefits</h1>

            <PageTitle title="Innit the useEffect()" />

            <Counter />

            <CounterCleanUp />

            <AutoTimerCleanEvent />
        </div>
    )
}