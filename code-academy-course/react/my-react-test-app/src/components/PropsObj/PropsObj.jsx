export function PropsDisplayer(props) {
    const stringProps = JSON.stringify(props);
    return (
        <div>
            <p>Props Obj below</p>
            {stringProps}
        </div>
    )
}

export function Product(products) {
  return (
    <div>
      <h1>{products.name}</h1>
      <h2>{products.price}</h2>
      <h3>{products.rating}</h3>
    </div>       
  )
}
