import { Container } from "react-bootstrap";
import styles from './Intro.module.scss'

const Intro = () => {
    return (
        <Container className={`pt-5 ${styles.intro}`}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque et sequi dignissimos consectetur facilis ducimus debitis! Neque, quod tempore! Reiciendis a, perspiciatis iure consequuntur aut eveniet illo, ipsa minima, beatae fugit nisi. Nulla aut et praesentium molestiae labore fuga animi consectetur eum autem dicta doloremque atque impedit officiis sit unde maiores possimus obcaecati veniam recusandae omnis illum facere pariatur, porro adipisci. Aut repellendus non maiores recusandae quia explicabo repellat voluptate laudantium nostrum deserunt incidunt dignissimos, architecto qui minus culpa aliquid delectus pariatur quos perspiciatis aperiam! Laudantium praesentium molestias cum ut rerum nostrum, voluptatibus voluptates eligendi architecto velit id debitis quam!</p>
        </Container>
    );
}
export default Intro;