import './footer.css'

const Footer = () => {
    return(
        <footer className='row mb-4'>
            <div className='list col-md-6'>
                <ul className='list-unstyled d-flex'>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Project</a>
                    </li>
                    <li>
                        <a href='#'>Speaking</a>
                    </li>
                    <li>
                        <a href='#'>Uses</a>
                    </li>
                </ul>
            </div>
            <div className='copy col-md-6'>
                <p>© 2025 React Developer, Ebrahim Mokhtar</p>
            </div>
        </footer>
    )
}
export default Footer;