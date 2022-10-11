import React, { useState } from 'react';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
            <div className="container-fluid mx-5">
                <a className="navbar-brand" href="/">NGO Portal</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/addarticle">Add an Event</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success bg-dark border-light text-light" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
}
