import React from 'react'

export const Footer = () => {
    let footerStyle={
        position: "relative",
        width: "100%",
        height: "58px",
        padding:"20px",
        bottom: "0px",
    }
    return (
        <div>
            <footer className="bg-dark text-light py-3" style={footerStyle}>
                <p className="text-center">
                    Copyright © Dept. of Computer Engineering, VIT Pune
                </p>
            </footer>
        </div>
    )
}
