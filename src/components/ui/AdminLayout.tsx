"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Package, Settings, LogOut, Menu, X } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function AdminLayout({
  children,
  title = "Dashboard",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Data User", href: "/users", icon: Users },
    { name: "Produk & Layanan", href: "/products", icon: Package },
    { name: "Pengaturan", href: "/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans overflow-hidden antialiased">
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden transition-opacity"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 bg-[#132C43] text-slate-300 transition-all duration-300 flex flex-col h-screen border-r border-slate-800/60 shrink-0 shadow-xl ${
          sidebarOpen ? "translate-x-0 w-64" : "-translate-x-full md:translate-x-0 md:w-64"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-5 border-b border-white/10 bg-black/10">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#E96B85] flex items-center justify-center shrink-0 shadow-md font-extrabold text-white text-sm">
              AC
            </div>
            <span className="font-extrabold text-lg text-white tracking-wide">
              ADMIN<span className="text-[#F08A8B]">CORE</span>
            </span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden p-1 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1.5 overflow-y-auto">
          {navigation.map((item, idx) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-medium transition-all relative ${
                  isActive
                    ? "bg-white/10 text-white font-semibold shadow-inner"
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                }`}
              >
                {isActive && <span className="absolute left-0 top-2 bottom-2 w-1.5 bg-[#E96B85] rounded-r-full" />}
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-3.5 border-t border-white/10 bg-black/10">
          <button className="w-full flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium text-slate-400 hover:text-[#E96B85] hover:bg-[#E96B85]/10 rounded-xl transition-all cursor-pointer">
            <LogOut className="w-5 h-5" />
            <span>Keluar</span>
          </button>
        </div>
      </aside>

      {/* CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-y-auto min-w-0">
        <header className="h-16 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-5 h-5 text-slate-700" />
            </Button>
            <h1 className="font-bold text-lg sm:text-xl text-slate-800 tracking-tight">{title}</h1>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2.5 p-1 sm:p-1.5 sm:pl-4 rounded-full border border-slate-200/80 hover:bg-slate-50 transition-all focus:outline-none cursor-pointer">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold text-slate-800 leading-tight">Admin User</p>
                  <p className="text-[11px] text-slate-500 font-medium">admin@gmail.com</p>
                </div>
                <Avatar className="w-8 h-8 sm:w-9 sm:h-9">
                  <AvatarFallback className="bg-gradient-to-tr from-[#2B5B84] to-[#E96B85] text-white font-bold text-xs sm:text-sm">
                    A
                  </AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 shadow-xl border-slate-100">
              <DropdownMenuLabel className="text-xs font-semibold text-slate-400">LOGGED IN AS</DropdownMenuLabel>
              <DropdownMenuLabel className="text-sm font-bold text-slate-800 pt-0">Admin User</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="rounded-xl cursor-pointer">Pengaturan Akun</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-[#E96B85] font-semibold rounded-xl cursor-pointer">Keluar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        <main className="p-4 sm:p-8 max-w-7xl w-full mx-auto space-y-6">{children}</main>
      </div>
    </div>
  );
}