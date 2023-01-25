const Children = ({children, valor}) => {
    return(
        <div>
            <div>
                <h2>{valor}</h2>
            </div>
            {children}
        </div>
    )
}

export default Children