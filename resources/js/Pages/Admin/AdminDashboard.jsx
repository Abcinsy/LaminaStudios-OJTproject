import React from 'react';

function AdminDashboard() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className="navbar-brand ps-3" href="/admin">Admin Dashboard</a>
                <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle">
                    <i className="fas fa-bars"></i>
                </button>
                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                        <button className="btn btn-primary" id="btnNavbarSearch" type="button">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </form>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-user fa-fw"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#!">Settings</a></li>
                            <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#!">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <div style={{ marginTop: '70px' }}>
                {/* The rest of your dashboard content goes here */}
            </div>
        </div>
    );
}

export default AdminDashboard;
