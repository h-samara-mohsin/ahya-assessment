import { Bell, Search } from "lucide-react";
import './Header.css'

export default function Header({ onMenuToggle }) {
    return (
        <header className="header">
            {/* Left — hamburger on mobile */}
            <button className="menu-toggle" onClick={onMenuToggle}>
                ☰
            </button>

            {/* Center — Search */}
            <div className="serach-wrapper">
                <Search size={16} className="search-icon" />
                <input type="text" placeholder="Explore Datasets..." className="search-input" />
            </div>

            {/* Right — Bell + User */}
            <div className="header-right">
                <button className="bell-btn">
                    <Bell size={18} />
                </button>

                <div className="user-info">
                    <div className="user-text">
                        <span className="user-name">Julian Casablancas</span>
                        <span className="user-role">Chief Curator</span>
                    </div>
                    <div className="avatar">
                        <img src="/src/assets/User.png" alt="avatar" />
                        <span className="avatar-dot" />
                    </div>
                </div>

            </div>
        </header>
    )
}