import { FC } from "react";
import styles from './list.css';

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export const List: FC = ({children}) => {
    return <ul className="list">{children}</ul>
}