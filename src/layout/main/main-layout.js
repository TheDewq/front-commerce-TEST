import classNames from "classnames";
import { Container } from "semantic-ui-react";
import styles from "./main-layout.module.scss";
import TopBar from "@/components/layout/topbar/topbar";
import SearchTop from "@/components/layout/search-top/search-top";
export default function MainLayout(props){


    const {children, isOpenSearch = false, isContainer=false, relative= false} = props;

    return(
        <>
            <TopBar/>
            <Container fluid>
                <div className={classNames({[styles.relative]: relative})}>
                    {isContainer ? <Container>{children}</Container> : children}
                </div>
            </Container>
            
        </>
    )
}