import "./card.css" // Importing the CSS file for styling

// Card component definition, receives props
const card = (props) => {
    return (
        // Card container with hidden overflow
        <div className='card' style={{overflow:"hidden"}}>
                {/* Static image for the card */}
                <img src="https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg?semt=ais_hybrid&w=740" alt="" width={180} />
            {/* Card title from props */}
            <h1>{props.title}</h1>
            {/* Card description from props */}
            <p>{props.description}</p>
        </div>    
    )
}

export default card // Exporting the card component
