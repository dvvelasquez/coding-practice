function InlineAndObjectStyles() {
    const myStyle = {
        background: 'lightblue',
        color: 'darkblue'
    }

    return (
        <div style={{ margin: "40px 0"}}>
            <h1 style={{ background: 'lightgreen', color: 'darkgreen' }}>Style This With Inline Styling</h1>
            <h1 style={myStyle}>Style This With Style Object Variable</h1>
        </div>
    );
}

export {
    InlineAndObjectStyles
}