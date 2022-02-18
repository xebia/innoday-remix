import { FC } from "react";
import styles from './listItem.css';

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export const ListItem:FC = ({children}) => {
    return <li className="listItem">{children}</li>
}