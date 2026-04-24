import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LayoutDashboard, UserPlus, Users, BookOpen } from "lucide-react";

function Sidebar() {
  const { pathname } = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard", icon: LayoutDashboard },
    { path: "/add", label: "Add Member", icon: UserPlus },
    { path: "/members", label: "All Members", icon: Users },
  ];

  return (
    <motion.div
      className="sidebar"
      initial={{ x: -260, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="sidebar-content">
        {/* Logo */}
        <div className="logo-section">
          <motion.div
            className="logo-icon"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <BookOpen size={24} strokeWidth={2} />
          </motion.div>
          <h1 className="logo-text">TeamHub</h1>
          <div className="logo-subtitle">Member Management</div>
        </div>

        {/* Navigation */}
        <nav className="nav-menu">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${isActive ? "active" : ""}`}
              >
                <motion.div
                  className="nav-item-content"
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08 + 0.2, duration: 0.35 }}
                  whileHover={{ x: isActive ? 0 : 4 }}
                >
                  <Icon className="nav-icon" size={18} strokeWidth={2} />
                  <span className="nav-label">{item.label}</span>
                  {isActive && (
                    <motion.div
                      className="active-indicator"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <div className="status-indicator">
            <div className="status-dot"></div>
            <span>System Active</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;