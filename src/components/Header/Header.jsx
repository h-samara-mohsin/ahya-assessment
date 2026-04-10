import { Bell, ChevronDown, LogOut, Search, Settings, User } from "lucide-react";
import hamburgerIcon from '../../assets/icon-hamburger.svg'
import bellIcon from '../../assets/icon-bell.svg'
import './Header.css'
import { useState } from "react";

export default function Header({ onMenuToggle }) {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    return (
        <header className="header">
            <button className="menu-toggle" onClick={onMenuToggle}>
                <img src={hamburgerIcon} alt="menu" width={18} height={12} />
            </button>

            <div className="search-wrapper">
                <Search size={16} className="search-icon" />
                <input type="text" placeholder="Explore datasets..." className="search-input" />
            </div>

            <div className="header-right">
                <button className="bell-btn">
                    <img src={bellIcon} alt="notifications" width={24} height={28} />
                </button>

                {/* Avatar with dropdown */}
                <div className="user-menu">
                    <div className="user-info" onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <div className="user-text">
                            <span className="user-name">Julian Casablancas</span>
                            <span className="user-role">Chief Curator</span>
                        </div>
                        <div className="avatar">
                            <img src="/src/assets/User.png" alt="avatar" />
                            <span className="avatar-dot" />
                        </div>
                        <ChevronDown
                            size={14} className={`chevron ${dropdownOpen ? 'open' : ''}`} />
                    </div>

                    {/* Dropdown */}
                    {dropdownOpen && (
                        <div className="dropdown">
                            <button className="dropdown-item">
                                <User size={14} /> Profile
                            </button>
                            <button className="dropdown-item">
                                <Settings size={14} /> Settings
                            </button>
                            <hr className="dropdown-divider" />
                            <button className="dropdown-item danger">
                                <LogOut size={14} /> Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}