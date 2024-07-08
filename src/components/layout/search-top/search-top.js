"use client";
import styles from "./search-top.module.scss";
import { Input } from "semantic-ui-react";
import { useState } from "react";
import classNames from "classnames";
export default function SearchTop(props){

    const [search, setSearch] = useState(true)
    const changeSearch = () => setSearch(!search);


    return(
        <div className={styles.container}>
            <h1>
                Zephyra
            </h1>
            <i class="bi bi-search" onClick={changeSearch}></i>
            <div className={styles.inputContainer}>
            <div class={classNames("input-group", {[styles.InputDisplay]:search})}>
                <input type="text" class="form-control" placeholder="producto" aria-label="Input group example" aria-describedby="basic-addon1"/>
                <span class="input-group-text" id="basic-addon1" onClick={changeSearch}>
                    <i class="bi bi-x-lg"></i>
                </span>
                
              </div>
                
                
            </div>
        </div>
    )

}