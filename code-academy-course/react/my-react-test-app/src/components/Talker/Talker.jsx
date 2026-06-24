import { Button1, Button2, ButtonProps } from './Button';

export function Talker() {

  function handleClick() {
    let speech = '';
    for (let i = 0; i < 2; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }

  return (
    <div>
        <div>
            <p>On click calling function on component button element</p>
            <Button1 onClick={handleClick} />
        </div>
        <div>
            <p>On click passing function from button file and calling it then on component button element</p>
            {/* // When passing a function on the jsx component we need to get the onClick event anyway on button file */}
            <Button2 talk={handleClick} />
        </div>
        <div>
            <p>Setting defualt text in ButtonProps.jsx and overriding it when calling the object down below</p>
            <ButtonProps />
            <ButtonProps text="overriding default text" />
        </div>
    </div>
  )
}
