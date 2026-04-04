function Header() {
    let name = "Hardik Soni";
    return <>
        <h2>Header</h2>
        <p>Username: {name}</p>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
        <button type="button">Go to Login Page</button>
    </>
} 

export default Header;