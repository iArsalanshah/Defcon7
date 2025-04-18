
import { Home, List, Flame, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="flex items-center space-x-2 text-sm font-medium hover:text-accent">
    {children}
  </Link>
);

export default function Nav() {
  return (
    <nav className="bg-secondary rounded-md p-4 flex justify-around items-center">
      <NavLink href="/">
        <Home className="h-5 w-5" />
        <span className="hidden sm:inline">Home</span>
      </NavLink>
      <NavLink href="/leaderboard">
        <List className="h-5 w-5" />
        <span className="hidden sm:inline">Leaderboard</span>
      </NavLink>
      <NavLink href="/call-alerts">
        <Flame className="h-5 w-5" />
        <span className="hidden sm:inline">Call Alerts</span>
      </NavLink>
      <NavLink href="/tutorials">
        <GraduationCap className="h-5 w-5" />
        <span className="hidden sm:inline">Tutorials</span>
      </NavLink>
    </nav>
  );
}
