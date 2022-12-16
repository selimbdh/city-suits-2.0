import React from 'react'

const Search = () => {
    return (
        <div className=''>

            <nav className="navbar navbar-expand-lg navbar-dark bg-body fixed-top ">
                <img src='https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_70/v1671096775/lougou-removebg-preview_j5u6df.png' />
                <div className="container-fluid">
                    <a className="navbar-brand text-dark" href="/"> <b> City Suits</b></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span> </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item"></li>

                            <li className="nav-item">
                                <a className="nav-link text-dark" href="/clothing">Clothing</a> </li>

                            <li className="nav-item">
                                <a className="nav-link text-dark" href="/suits">Suits</a> </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="/accessories">Accessories</a> </li>
                        </ul>

                        <div className="input-group rounded w-25 ">
                            <input type="search" className="form-control rounded text-dark " placeholder="Search " aria-label="Search" aria-describedby="search-addon" />
                            <span className="input-group-text border-0" id="search-addon">
                                <i className="fas fa-search"  ></i>
                            </span>
                        </div>
                        <button className="btn  text-dark" type="submit" title="SHOP LIST" onClick={()=>{location.href="/cart"}}>
                            <img src='https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_33/v1671035218/bag_ppahl3.png' />
                        </button>
                        <button className="btn  text-dark" type="submit" title="LOGIN" onClick={()=>{location.href="/login"}}>
                            <img src='https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_33/v1671035073/user_xzrvuk.png' />
                        </button>
                        <button className="btn  text-dark" type="submit" title="WISH LIST" onClick={()=>{location.href="/wishlist"}}>
                            <img src='https://res.cloudinary.com/dn9qfvg2p/image/upload/c_scale,w_30/v1671038723/heart_y4chdf.png'  />
                        </button>

                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Search