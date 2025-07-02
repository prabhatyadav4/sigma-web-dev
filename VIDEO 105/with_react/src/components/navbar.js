// Define the Navbar component and accept props
const navbar = (props) => {
    return (
        <div>
                {/* Display the logo text passed via props */}
                <div className="logo">{props.logoText}</div>
                {/* Navigation menu */}
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
        </div>
    )
}

// Export the Navbar component as default
export default navbar
