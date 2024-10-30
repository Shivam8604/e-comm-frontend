/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import items from './Data';


const Navbar = ({ setData }) => {
    const filterByCategory = (category) => {
        const elements = items.filter((product) => product.category === category);
        console.log(elements)
        setData(elements)
    }
    const filterByPrice = (price) => {
        const element = items.filter((product) =>product.price  >= price)
        setData(element)
    }
    return (
        <div className='sticky-top'>
            <header>
                <div className='nav-bar'>
                    <Link to={'/'} className='brand'>E-Cart</Link>
                    <div className='search-bar'>
                        <input type='text' placeholder='Search products' />
                    </div>
                    <Link to={'/cart'} className='cart'>Cart</Link>
                </div>
                <div className='nav-bar-wrapper'>
                    <div className='items'>Filter by {"->"} </div>
                    <div className='items' onClick={() => setData(items)}>No Filter</div>
                    <div className='items' onClick={() => filterByCategory('mobiles')} >Mobiles</div>
                    <div className='items' onClick={() => filterByCategory('laptops')}>Laptops</div>
                    <div className='items' onClick={() => filterByCategory('tablets')}>Tablats</div>
                    <div className='items' onClick={() => filterByPrice(49999)}>{">="}29999</div>
                    <div className='items' onClick={() => filterByPrice(29999)}>{">="}49999</div>
                    <div className='items' onClick={() => filterByPrice(89999)}>{">="}89999</div>
                    <div className='items' onClick={() => filterByPrice(69999)}>{">="}69999</div>
                    <div className='items' onClick={() => filterByPrice(79999)}>{">="}79999</div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
