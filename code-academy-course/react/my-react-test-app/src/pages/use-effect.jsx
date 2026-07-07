import {
    PageTitle,
    Counter,
    CounterCleanUp,
    AutoTimerCleanEvent,
    TheUseEffectEvent,
    UseEffectConclusion
} from '../components/UseEffect/PageTitle';

export default function TheUseEffect() {
    return (
        <div className='use-effect-page'>
            <h1>The useEffect() and it's bennefits</h1>

            <PageTitle title="Innit the useEffect()" />

            <Counter />

            <CounterCleanUp />

            <AutoTimerCleanEvent />

            <TheUseEffectEvent />

            <UseEffectConclusion />
        </div>
    )
}