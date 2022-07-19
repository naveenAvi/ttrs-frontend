import React, { useState } from 'react'

export default function History() {
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{ marginBottom:"5px" }}>
                            <div className="card-body">
                                <b>Ticket Reservation History</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card card-margin">
                            <div className="card-body">
                                <div className="row search-body">
                                    <div className="col-lg-12">
                                        <div className="search-result">
                                            <div className="result-header">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="records">Showing: <b>1-20</b> of <b>200</b> result</div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="result-actions">
                                                            <div className="result-sorting">
                                                                <span>Sort By:</span>
                                                                <select className="form-control border-0" id="exampleOption">
                                                                    <option value="1">Relevance</option>
                                                                    <option value="2">Names (A-Z)</option>
                                                                    <option value="3">Names (Z-A)</option>
                                                                </select>
                                                            </div>
                                                            <div className="result-views">
                                                                <button type="button" className="btn btn-soft-base btn-icon">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        className="feather feather-list"
                                                                    >
                                                                        <line x1="8" y1="6" x2="21" y2="6"></line>
                                                                        <line x1="8" y1="12" x2="21" y2="12"></line>
                                                                        <line x1="8" y1="18" x2="21" y2="18"></line>
                                                                        <line x1="3" y1="6" x2="3" y2="6"></line>
                                                                        <line x1="3" y1="12" x2="3" y2="12"></line>
                                                                        <line x1="3" y1="18" x2="3" y2="18"></line>
                                                                    </svg>
                                                                </button>
                                                                <button type="button" className="btn btn-soft-base btn-icon">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        className="feather feather-grid"
                                                                    >
                                                                        <rect x="3" y="3" width="7" height="7"></rect>
                                                                        <rect x="14" y="3" width="7" height="7"></rect>
                                                                        <rect x="14" y="14" width="7" height="7"></rect>
                                                                        <rect x="3" y="14" width="7" height="7"></rect>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="result-body">
                                                <div className="table-responsive">
                                                    <table className="table widget-26">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="widget-26-job-emp-img">
                                                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="Company" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-title">
                                                                        <a href="#">Senior Software Engineer / Developer</a>
                                                                        <p className="m-0"><a href="#" className="employer-name">Axiom Corp.</a> <span className="text-muted time">1 days ago</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-info">
                                                                        <p className="type m-0">Full-Time</p>
                                                                        <p className="text-muted m-0">in <span className="location">London, UK</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-salary">$ 50/hr</div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-category bg-soft-base">
                                                                        <i className="indicator bg-base"></i>
                                                                        <span>Software Development</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-starred">
                                                                        <a href="#">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="24"
                                                                                height="24"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                strokeWidth="2"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                className="feather feather-star"
                                                                            >
                                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="widget-26-job-emp-img">
                                                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Company" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-title">
                                                                        <a href="#">Marketing &amp; Communication Supervisor</a>
                                                                        <p className="m-0"><a href="#" className="employer-name">AxiomUI Llc.</a> <span className="text-muted time">2 days ago</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-info">
                                                                        <p className="type m-0">Part-Time</p>
                                                                        <p className="text-muted m-0">in <span className="location">New York, US</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-salary">$ 60/hr</div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-category bg-soft-warning">
                                                                        <i className="indicator bg-warning"></i>
                                                                        <span>Marketing</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-starred">
                                                                        <a href="#">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="24"
                                                                                height="24"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                strokeWidth="2"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                className="feather feather-star"
                                                                            >
                                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="widget-26-job-emp-img">
                                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Company" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-title">
                                                                        <a href="#">Senior Data Analyst / Scientist</a>
                                                                        <p className="m-0"><a href="#" className="employer-name">AxiomUI Inc.</a> <span className="text-muted time">4 days ago</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-info">
                                                                        <p className="type m-0">Part-Time</p>
                                                                        <p className="text-muted m-0">in <span className="location">New York, US</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-salary">$ 60/hr</div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-category bg-soft-success">
                                                                        <i className="indicator bg-success"></i>
                                                                        <span>Artificial Intelligence</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-starred">
                                                                        <a href="#">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="24"
                                                                                height="24"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                strokeWidth="2"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                className="feather feather-star"
                                                                            >
                                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="widget-26-job-emp-img">
                                                                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="Company" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-title">
                                                                        <a href="#">UX Designer &amp; UI Developer</a>
                                                                        <p className="m-0"><a href="#" className="employer-name">AxiomUI Inc.</a> <span className="text-muted time">5 days ago</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-info">
                                                                        <p className="type m-0">Part-Time</p>
                                                                        <p className="text-muted m-0">in <span className="location">Toronto, CAN</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-salary">$ 35/hr</div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-category bg-soft-danger">
                                                                        <i className="indicator bg-danger"></i>
                                                                        <span>Design</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-starred">
                                                                        <a href="#">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="24"
                                                                                height="24"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                strokeWidth="2"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                className="feather feather-star"
                                                                            >
                                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="widget-26-job-emp-img">
                                                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="Company" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-title">
                                                                        <a href="#">Information Security Analyst / Expert</a>
                                                                        <p className="m-0"><a href="#" className="employer-name">Axiom Corp.</a> <span className="text-muted time">6 days ago</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-info">
                                                                        <p className="type m-0">Part-Time</p>
                                                                        <p className="text-muted m-0">in <span className="location">Mumbai, IN</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-salary">$ 70/hr</div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-category bg-soft-info">
                                                                        <i className="indicator bg-info"></i>
                                                                        <span>Infra Supervision</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-starred">
                                                                        <a href="#">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="24"
                                                                                height="24"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                strokeWidth="2"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                className="feather feather-star starred"
                                                                            >
                                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="widget-26-job-emp-img">
                                                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Company" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-title">
                                                                        <a href="#">Senior Software Engineer / Developer</a>
                                                                        <p className="m-0"><a href="#" className="employer-name">Axiom Corp.</a> <span className="text-muted time">1 days ago</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-info">
                                                                        <p className="type m-0">Full-Time</p>
                                                                        <p className="text-muted m-0">in <span className="location">London, UK</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-salary">$ 50/hr</div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-category bg-soft-base">
                                                                        <i className="indicator bg-base"></i>
                                                                        <span>Software Development</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-starred">
                                                                        <a href="#">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="24"
                                                                                height="24"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                strokeWidth="2"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                className="feather feather-star"
                                                                            >
                                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="widget-26-job-emp-img">
                                                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Company" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-title">
                                                                        <a href="#">Marketing &amp; Communication Supervisor</a>
                                                                        <p className="m-0"><a href="#" className="employer-name">AxiomUI Llc.</a> <span className="text-muted time">2 days ago</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-info">
                                                                        <p className="type m-0">Part-Time</p>
                                                                        <p className="text-muted m-0">in <span className="location">New York, US</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-salary">$ 60/hr</div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-category bg-soft-warning">
                                                                        <i className="indicator bg-warning"></i>
                                                                        <span>Marketing</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-starred">
                                                                        <a href="#">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="24"
                                                                                height="24"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                strokeWidth="2"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                className="feather feather-star"
                                                                            >
                                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="widget-26-job-emp-img">
                                                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Company" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-title">
                                                                        <a href="#">Senior Data Analyst / Scientist</a>
                                                                        <p className="m-0"><a href="#" className="employer-name">AxiomUI Inc.</a> <span className="text-muted time">4 days ago</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-info">
                                                                        <p className="type m-0">Part-Time</p>
                                                                        <p className="text-muted m-0">in <span className="location">New York, US</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-salary">$ 60/hr</div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-category bg-soft-success">
                                                                        <i className="indicator bg-success"></i>
                                                                        <span>Artificial Intelligence</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-starred">
                                                                        <a href="#">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="24"
                                                                                height="24"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                strokeWidth="2"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                className="feather feather-star"
                                                                            >
                                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="widget-26-job-emp-img">
                                                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Company" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-title">
                                                                        <a href="#">UX Designer &amp; UI Developer</a>
                                                                        <p className="m-0"><a href="#" className="employer-name">AxiomUI Inc.</a> <span className="text-muted time">5 days ago</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-info">
                                                                        <p className="type m-0">Part-Time</p>
                                                                        <p className="text-muted m-0">in <span className="location">Toronto, CAN</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-salary">$ 35/hr</div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-category bg-soft-danger">
                                                                        <i className="indicator bg-danger"></i>
                                                                        <span>Design</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-starred">
                                                                        <a href="#">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="24"
                                                                                height="24"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                strokeWidth="2"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                className="feather feather-star"
                                                                            >
                                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="widget-26-job-emp-img">
                                                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Company" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-title">
                                                                        <a href="#">Information Security Analyst / Expert</a>
                                                                        <p className="m-0"><a href="#" className="employer-name">Axiom Corp.</a> <span className="text-muted time">6 days ago</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-info">
                                                                        <p className="type m-0">Part-Time</p>
                                                                        <p className="text-muted m-0">in <span className="location">Mumbai, IN</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-salary">$ 70/hr</div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-category bg-soft-info">
                                                                        <i className="indicator bg-info"></i>
                                                                        <span>Infra Supervision</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-starred">
                                                                        <a href="#">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="24"
                                                                                height="24"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                strokeWidth="2"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                className="feather feather-star starred"
                                                                            >
                                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <nav className="d-flex justify-content-center">
                                    <ul className="pagination pagination-base pagination-boxed pagination-square mb-0">
                                        <li className="page-item">
                                            <a className="page-link no-border" href="#">
                                                <span aria-hidden="true">«</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item active"><a className="page-link no-border" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link no-border" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link no-border" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link no-border" href="#">4</a></li>
                                        <li className="page-item">
                                            <a className="page-link no-border" href="#">
                                                <span aria-hidden="true">»</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
