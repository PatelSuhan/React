import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './Bootstrap.css'

const Bootstrap = () => {
    return (
        <div>
            {/* header */}
            <nav className="navbar navbar-expand-lg bg-primary-subtle p-3">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Logo
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                        Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        Blog
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                        Services
                        </a>
                        <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" href="#">
                            Action
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                            Another action
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                            Something else here
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        Contect
                        </a>
                    </li>
                    </ul>
                    <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                    </form>
                </div>
                </div>
            </nav>
            {/* main */}
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                />
                </div>
                <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={10000}>
                    <img
                    src="https://img.freepik.com/free-photo/animal-eye-staring-close-up-watch-nature-generative-ai_188544-15471.jpg"
                    className="d-block w-100"
                    height={"500px"}
                    />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img
                    src="https://img.freepik.com/free-photo/animal-eagle-owl-nature-beak-bird-prey-feather-generative-ai_188544-8252.jpg?semt=ais_hybrid"
                    className="d-block w-100"
                    height={"500px"}
                    />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://t4.ftcdn.net/jpg/09/84/07/51/360_F_984075184_0Sqhdgzwu1UNV0MpIWfKeIfra427fXnv.jpg"
                    className="d-block w-100"
                    height={"500px"}
                    />
                </div>
                </div>
                <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
                >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
                </button>
                <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
                >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* About */}
            <div className="about container">
                <h1 className='h1'>About Us</h1>
                <div className="row g-5">
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                        <img src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                            Go somewhere
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                        <img src="https://t4.ftcdn.net/jpg/07/93/85/59/360_F_793855955_UCZCpTkmjnxYhivHfRPFGGopl6cbUa30.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                            Go somewhere
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                        <img src="https://cdn.pixabay.com/photo/2020/06/24/19/41/cat-5337501_640.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                            Go somewhere
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                        <img src="https://www.science.org/do/10.1126/science.adm9232/full/_20231108_on_cat_eyes_lede-1699895076230.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                            Go somewhere
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                        <img src="https://media.istockphoto.com/id/598536632/photo/cat-eyes.jpg?s=612x612&w=0&k=20&c=1zE8nMG8mQtDaPk7GTugPEtw9tWEUvwWEulAzg1tLVk=" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                            Go somewhere
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                        <img src="https://cdn.pixabay.com/photo/2023/01/10/07/12/cat-7709087_640.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                            Go somewhere
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog */}
            <div className="blog container">
                <h1 className='h1'>Blog</h1>
                <div className="row g-3">
                    <div className="col-6">
                        <img src="https://th.bing.com/th/id/OIG4.hb6x6NsHBTvbDGaD13Ua" alt="" height={"500px"} />
                    </div>
                    <div className="col-6">
                        <div className="blog-text">
                            <h3>Animals</h3>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseOne"
                                    >
                                        Accordion Item #1
                                    </button>
                                    </h2>
                                    <div
                                    id="flush-collapseOne"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                    >
                                    <div className="accordion-body">
                                        Placeholder content for this accordion, which is intended to demonstrate
                                        the <code>.accordion-flush</code> class. This is the first item's
                                        accordion body.
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseTwo"
                                    >
                                        Accordion Item #2
                                    </button>
                                    </h2>
                                    <div
                                    id="flush-collapseTwo"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                    >
                                    <div className="accordion-body">
                                        Placeholder content for this accordion, which is intended to demonstrate
                                        the <code>.accordion-flush</code> class. This is the second item's
                                        accordion body. Let's imagine this being filled with some actual
                                        content.
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseThree"
                                    >
                                        Accordion Item #3
                                    </button>
                                    </h2>
                                    <div
                                    id="flush-collapseThree"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                    >
                                    <div className="accordion-body">
                                        Placeholder content for this accordion, which is intended to demonstrate
                                        the <code>.accordion-flush</code> class. This is the third item's
                                        accordion body. Nothing more exciting happening here in terms of
                                        content, but just filling up the space to make it look, at least at
                                        first glance, a bit more representative of how this would look in a
                                        real-world application.
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi assumenda sit laudantium debitis? Eveniet, omnis placeat pariatur voluptas neque fugiat non quis exercitationem labore consectetur! Iste facilis, laudantium voluptatem ex sit ipsa impedit, voluptatibus expedita repellat, accusamus itaque? Dignissimos, magni.</p>
                            <input class="btn btn-primary blog-btn" type="submit" value="Submit"></input>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contect */}
            <h1 className='h1'>Form</h1>
            <form action="" className='contect'>
                <input type="text" placeholder='Enter Name' />
                <br />
                <input type="password" placeholder='Enter Password' />
                <br />
                <input type="email" placeholder='Enter Email' />
                <br /><br />
                <button type='submit' className='form-btn'>Submit</button>

            </form>


        </div>
    );
}

export default Bootstrap;
