import { NavLink } from "../NavLink";

export function Header() {
  return (
    <div>
      <nav className="flex items-center space-x-3">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </div>
  )
}