import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Header(){

    const [t,i18n] = useTranslation("global");

    return(
        <div>
            <h1>{t("header.hello-world")}</h1>
        </div>
    )
}