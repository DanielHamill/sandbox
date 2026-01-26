import { Link, useLocation } from 'react-router-dom';
import { Box, Flex, Heading } from "@radix-ui/themes";
import "./Navigation.css"

function Navigation() {
    const location = useLocation();

    return (
        <Box asChild>
            <nav>
                <Flex justify="between" align="center" p="2" className='navContainer' pl="6" pr="6">
                    <Flex direction="column">
                        <Heading size="3" weight="light">Daniel Hamill</Heading>
                        <Heading size="3" weight="light">Software Engineer @ NCR Voyix</Heading>
                    </Flex>
                    <Flex asChild gap="4">
                        <ul className="nav-list">
                            <li><Link to="/" className="nav-link"><Heading size="5" weight="light" className={location.pathname === '/' ? 'nav-selected' : ''}>Home</Heading></Link></li>
                            <li><Link to="/about" className="nav-link"><Heading size="5" weight="light" className={location.pathname === '/about' ? 'nav-selected' : ''}>About</Heading></Link></li>
                            <li><Link to="/projects" className="nav-link"><Heading size="5" weight="light" className={location.pathname === '/projects' ? 'nav-selected' : ''}>Projects</Heading></Link></li>
                        </ul>
                    </Flex>
                </Flex>
            </nav>
        </Box>
    );
}

export default Navigation;
