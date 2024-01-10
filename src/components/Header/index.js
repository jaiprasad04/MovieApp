import {Component} from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'
import {MdMenuOpen} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'

import './index.css'

class Header extends Component {
  state = {
    showMenu: false,
    inputText: '',
    currentPath: '',
  }

  componentDidMount() {
    const path = window.location.pathname
    this.setState({currentPath: path})
  }

  showSearchInput = () => {
    const {currentPath} = this.state
    return currentPath === '/search'
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onClickShowMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }))
  }

  onEnterSearchInput = event => {
    const {onSearchInput} = this.props
    const {inputText} = this.state
    if (event.key === 'Enter' && inputText !== '') {
      onSearchInput(inputText)
    }
  }

  onClickSearch = () => {
    const {onSearchInput} = this.props
    const {inputText} = this.state

    if (inputText !== '') {
      onSearchInput(inputText)
    }
  }

  render() {
    const {showMenu, currentPath, inputText} = this.state
    const showInput = this.showSearchInput()
    const homeClassNameStyling = currentPath === '/' && 'active'
    const popularClassNameStyling = currentPath === '/popular' && 'active'
    const accountClassNameStyling = currentPath === '/account' && 'active'

    return (
      <nav className="nav-container">
        <div className="responsive-nav-container">
          <div className="desktop-nav-container">
            <div className="website-logo-and-links">
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/dkwwcq9yc/image/upload/v1701754310/Group_7399_kngyxc.png"
                  alt="website logo"
                  className="website-movie-logo"
                />
              </Link>
              <ul className="nav-list-items">
                <Link to="/" className="nav-link">
                  <li className={`nav-item ${homeClassNameStyling}`}>Home</li>
                </Link>
                <Link to="/popular" className="nav-link">
                  <li className={`nav-item ${popularClassNameStyling}`}>
                    Popular
                  </li>
                </Link>
              </ul>
            </div>
            <div className="search-and-account-container">
              {showInput ? (
                <div className="search-container">
                  <input
                    type="search"
                    className="search-input"
                    onChange={this.onChangeInput}
                    onKeyDown={this.onEnterSearchInput}
                    placeholder="Search"
                    value={inputText}
                  />

                  <button
                    type="button"
                    className="search-button"
                    testid="searchButton"
                    onClick={this.onClickSearch}
                  >
                    <HiOutlineSearch size={20} color="#ffffff" />
                  </button>
                </div>
              ) : (
                <Link to="/search">
                  <button
                    type="button"
                    className="search-icon"
                    testid="searchButton"
                  >
                    <HiOutlineSearch size={20} color="#ffffff" />
                  </button>
                </Link>
              )}
              <Link to="/account">
                <img
                  src="https://res.cloudinary.com/dkwwcq9yc/image/upload/v1701833178/Avatar_bz4muf.png"
                  alt="profile"
                  className="profile"
                />
              </Link>
              <button
                type="button"
                className="menu-icon"
                onClick={this.onClickShowMenu}
              >
                <MdMenuOpen size={25} color="white" />
              </button>
            </div>
          </div>
        </div>
        {showMenu && (
          <ul className="mini-list">
            <Link to="/" className="nav-link">
              <li className={`nav-item ${homeClassNameStyling}`}>Home</li>
            </Link>
            <Link to="/popular" className="nav-link">
              <li className={`nav-item ${popularClassNameStyling}`}>Popular</li>
            </Link>
            <Link to="/account" className="nav-link">
              <li className={`nav-item ${accountClassNameStyling}`}>Account</li>
            </Link>
            <li>
              <button
                type="button"
                onClick={this.onClickShowMenu}
                className="close-button"
              >
                <AiFillCloseCircle size={22} />
              </button>
            </li>
          </ul>
        )}
      </nav>
    )
  }
}

export default Header
