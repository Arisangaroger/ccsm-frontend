import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaChartBar, FaMap, FaUsers, FaFileAlt, FaCog, FaSearch } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import type { ChangeEvent } from 'react';
import { useUser, type UserRole } from '../../contexts/UserContext';

interface MenuItem {
  icon: React.ElementType;
  label: string;
  link: string;
  badge?: number;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface RoleConfig {
  sections: MenuSection[];
  userTitle: string;
  logo: {
    text: string;
    title: string;
  };
}

// Ensure we only use the roles defined in UserContext
const roleConfigs: Record<UserRole, RoleConfig> = {
  admin: {
    sections: [
      {
        title: 'MAIN',
        items: [
          { icon: FaTachometerAlt, label: 'Dashboard', link: '/dashboard' },
          { icon: FaFileAlt, label: 'Complaints', link: '/dashboard/complaints', badge: 12 }, // Assuming complaints link for admin
          { icon: FaChartBar, label: 'Analytics', link: '/dashboard/analytics' },
          { icon: FaMap, label: 'Districts', link: '/dashboard/districts' },
        ]
      },
      {
        title: 'ADMINISTRATION',
        items: [
          { icon: FaUsers, label: 'Staff Accounts', link: '/dashboard/staff' },
          { icon: FaFileAlt, label: 'Reports', link: '/dashboard/reports' },
          { icon: FaCog, label: 'Settings', link: '/dashboard/settings' }
        ]
      }
    ],
    userTitle: 'Administrator',
    logo: {
      text: 'CV',
      title: 'CitizenVoice Admin'
    }
  },
  officer: {
    sections: [
      {
        title: 'MAIN',
        items: [
          { icon: FaTachometerAlt, label: 'Dashboard', link: '/dashboard' },
          { icon: FaFileAlt, label: 'Complaint Inbox', link: '/dashboard/complaints', badge: 24 }, // Added badge based on image
          { icon: FaChartBar, label: 'Analytics', link: '/dashboard/analytics' },
          { icon: FaMap, label: 'Districts', link: '/dashboard/districts' },
        ]
      },
      {
        title: 'ADMINISTRATION',
        items: [
          { icon: FaUsers, label: 'Staff Accounts', link: '/dashboard/staff' },
          { icon: FaFileAlt, label: 'Reports', link: '/dashboard/reports' },
          { icon: FaCog, label: 'Settings', link: '/dashboard/settings' }
        ]
      }
    ],
    userTitle: 'Officer',
    logo: {
      text: 'CV',
      title: 'CitizenVoice Officer'
    }
  },
  citizen: {
    sections: [
      {
        title: 'MAIN',
        items: [
          { icon: FaTachometerAlt, label: 'Dashboard', link: '/dashboard' },
          { icon: FaFileAlt, label: 'My Complaints', link: '/dashboard/complaints' },
        ]
      },
      {
        title: 'SETTINGS',
        items: [
          { icon: FaCog, label: 'Settings', link: '/dashboard/settings' }
        ]
      }
    ],
    userTitle: 'Citizen',
    logo: {
      text: 'CV',
      title: 'CitizenVoice'
    }
  }
};

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const { role } = useUser();
  const currentConfig = roleConfigs[role];

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <aside className="w-64 bg-white text-gray-900 border-r border-gray-200 flex flex-col justify-between p-4 shadow-md">
      <div>
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">{currentConfig.logo.text}</span>
            </div>
            <span className="text-lg font-semibold text-gray-800">{currentConfig.logo.title}</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <span className="absolute left-2 top-2.5 text-gray-500">
              <FaSearch size={14} />
            </span>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-8 pr-2 py-2 rounded-md border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <nav className="space-y-1">
          {currentConfig.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {section.title && (
                <h3 className="px-3 mt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">{section.title}</h3>
              )}
              <ul className="mt-1 space-y-1">
                {section.items.map((item, index) => {
                  const isActive = location.pathname === item.link;
                  return (
                    <li key={index}>
                      <Link
                        to={item.link}
                        className={`flex items-center px-3 py-2 rounded-md transition-all text-sm font-medium group ${
                          isActive ? 'bg-gray-200 text-blue-600' : 'hover:bg-gray-100 hover:text-blue-600'
                        }`}
                      >
                        <item.icon size={18} className={`mr-3 text-gray-600 group-hover:text-blue-600 transition-colors`} />
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center p-2 rounded-md bg-gray-50">
          <FiUser size={20} className="mr-3 text-gray-500" />
          <div>
            <p className="text-sm font-medium">John Makubazi</p>
            <p className="text-xs text-gray-500">{currentConfig.userTitle}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;