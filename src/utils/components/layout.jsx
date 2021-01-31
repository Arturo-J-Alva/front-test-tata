import React from 'react'
import Head from 'next/head'

const Layout = ({ title, children, className, classContainer }) => {
    return (
        <>
            <Head>
                <title> {title} </title>
            </Head>

            <div className={"w-full "+classContainer}>
                <div className={className}>
                    {children}
                </div>
            </div>

        </>
    )
}

export default Layout
