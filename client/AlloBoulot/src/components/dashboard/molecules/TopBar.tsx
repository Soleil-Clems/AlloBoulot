import React, { useState, useEffect, useRef } from "react";
import { LogOut, User, LayoutDashboard, BrickWallShield } from "lucide-react";
import type { TopBarProps } from '../../../types/application.types';
import { Link } from 'react-router';
import { useAuth } from '@/hooks/useAuth';
import { LogoutRequest } from '@/request/authRequest';
import {
  useMutation,
} from "@tanstack/react-query";

export const TopBar: React.FC<TopBarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { logout, user, isAdmin } = useAuth()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logoutMutation = useMutation({
    mutationFn: LogoutRequest,
    onSuccess(data) {
      logout()
    },
    onError(error) {
      logout()
    },
  })


  const handleLogout = async () => {
    logoutMutation.mutate()
    setIsMenuOpen(false);
  };

  const userInitials =
    user?.first_name && user?.last_name
      ? `${user.first_name[0]}${user.last_name[0]}`.toUpperCase()
      : "";
  const userRole = user.role === "admin" ? "Administrateur" : "Candidat";

  return (
    <div className="  sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-end">
          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-100 hover:bg-white transition-all"
            >
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                {userInitials}
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-sm font-semibold text-slate-800">{user.first_name} {user.last_name}</p>
                <p className="text-xs text-slate-500">{userRole}</p>
              </div>
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">

                <Link
                  to="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-colors"
                >
                  <LayoutDashboard size={18} className="text-slate-600" />
                  <span className="text-sm font-medium text-slate-700">
                    Tableau de bord
                  </span>
                </Link>


                {isAdmin && (
                  <>
                    <div className="border-t border-slate-200 my-1"></div>
                    <Link
                      to="/admin/user"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full px-4 py-3 flex items-center gap-3 hover:bg-blue-50 transition-colors"
                    >
                      <BrickWallShield size={18} className="text-blue-600" />
                      <span className="text-sm font-medium text-blue-700">
                        Admin dashboard
                      </span>
                    </Link>
                  </>
                )}


                <div className="border-t border-slate-200 my-1"></div>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-red-50 transition-colors text-red-600"
                >
                  <LogOut size={18} />
                  <span className="text-sm font-medium">Déconnexion</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );



};